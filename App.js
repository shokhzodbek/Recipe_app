/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import MealNavigation from './src/navigation/MealNavigation';
import {NavigationContainer} from '@react-navigation/native'
import CategoriesScreen from './src/screens/CategoriesScreen';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
       <TabNavigator/>
       </NavigationContainer>
      
    </>
  );
};


export default App;

