import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
const Stack = createStackNavigator()
const StackNavigation = () => {
      return (
            <Stack.Navigator>
                  <Stack.Screen 
                  name='favor'
                   component={FavoritesScreen}
                   options={{
                  headerTitle:'Favorites Meals',
                  headerTitleAlign:'center'
                   }}
                   />

                   <Stack.Screen name="detail" component={MealDetailScreen}/>
            </Stack.Navigator>
           
      )
}

export default StackNavigation
