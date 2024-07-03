import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK_SCREENS} from '../lib/constants';
import Splash from '../screens/Splash';
import Home from '../screens/Home';

type TRootNavigationScreens = {
  Splash: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<TRootNavigationScreens>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={STACK_SCREENS.Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={STACK_SCREENS.Splash} component={Splash} />
      <Stack.Screen name={STACK_SCREENS.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
