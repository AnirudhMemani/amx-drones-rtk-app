import {StyleSheet, Text, View} from 'react-native';
import ListOfDevices from '../components/ListOfDevices';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Bluetooth devices</Text>
      <ListOfDevices />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
