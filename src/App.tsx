import React from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import StackNavigation from './navigation/StackNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
