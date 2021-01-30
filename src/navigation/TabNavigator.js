import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MealNavigation from './MealNavigation'
import Food from 'react-native-vector-icons/MaterialIcons'
import FavoritesScreen from '../screens/FavoritesScreen'
import Star from 'react-native-vector-icons/AntDesign'
import StackNavigation from './StackNavigation'
const Tab = createBottomTabNavigator()
const TabNavigator = () => {
      return (
            <Tab.Navigator tabBarOptions={{
                  showLabel:false,
                  tabStyle:{
                        backgroundColor:'white', 
                  },
      
            }}>
                  <Tab.Screen 
                  name="Home" 
                  component={MealNavigation}
                  options={{
                        tabBarIcon:()=><Food name="restaurant" size={30} color={'red'}/>
                  }}
                  />
                  <Tab.Screen 
                  name="Favor" 
                  component={StackNavigation}
                  options={{
                        tabBarIcon:()=><Star name="star" size={30} color={'#eec34d'}/>
                  }}
                  />
            </Tab.Navigator>
      )
}

export default TabNavigator
