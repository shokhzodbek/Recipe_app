import React from 'react'
import { View, Text } from 'react-native'
import {} from '@react-navigation/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FilterScreen from '../screens/FilterScreen'
const Drawer =createDrawerNavigator()
const DrawerNavigation = () => {
      return (
            <Drawer.Navigator>
                  <Drawer.Screen name="Filter" component={FilterScreen}/>
            </Drawer.Navigator>
           
      )
}

export default DrawerNavigation
