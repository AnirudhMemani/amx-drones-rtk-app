import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {STACK_SCREENS} from '../lib/constants';

type TNavigationProps = {
  navigation: NativeStackNavigationProp<any, any>;
};

const Splash: React.FC<TNavigationProps> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(
      () => navigation.replace(STACK_SCREENS.Home),
      2500,
    );

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
