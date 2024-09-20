/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import TabNavigator from './navigator/TabNavigator';
import LandingScreen from './screens/LandingScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="index" component={LandingScreen} />
        <Stack.Screen name="Search" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
