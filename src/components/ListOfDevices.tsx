import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

type TDevices = {id: string; name: string};

const ListOfDevices = () => {
  const [devices, setDevices] = useState<TDevices[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const enableBluetooth = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            {
              title: 'Bluetooth Permission',
              message:
                'App needs access to your Bluetooth to function properly',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Bluetooth permission denied');
            return;
          }
        }

        const isEnabled = await BluetoothSerial.requestEnable();
        if (isEnabled) {
          console.log('Bluetooth enabled');
        } else {
          console.log('Bluetooth is not enabled');
        }
      } catch (err) {
        console.error(err);
      }
    };

    const listDevices = async () => {
      try {
        const devices = await BluetoothSerial.list();
        setDevices(devices);
      } catch (err) {
        console.error(err);
      }
    };

    enableBluetooth();
    listDevices();
  }, []);

  const connectToDevice = async (device: TDevices) => {
    try {
      await BluetoothSerial.connect(device.id);
      console.log(`Connected to device ${device.name}`);
      setConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const renderDevice = ({item}: {item: TDevices}) => (
    <TouchableOpacity
      style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}
      onPress={() => connectToDevice(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 20}}>
          Bluetooth Devices
        </Text>
        <FlatList
          data={devices}
          keyExtractor={item => item.id}
          renderItem={renderDevice}
        />
        {connected && (
          <View style={{padding: 20, backgroundColor: '#0f0', marginTop: 20}}>
            <Text style={{textAlign: 'center', fontSize: 18}}>Connected</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ListOfDevices;
