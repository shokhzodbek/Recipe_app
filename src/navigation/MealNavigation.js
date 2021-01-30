import { createStackNavigator} from '@react-navigation/stack';
import React from 'react'
import {createAppContainer, useNavigation} from '@react-navigation/native'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import RenderItem from '../components/RenderItem'
import RenderItem2 from '../components/RenderItem2'
import Star from 'react-native-vector-icons/AntDesign'
import Menu from 'react-native-vector-icons/Entypo'
import StackNavigation from './StackNavigation';
import DrawerNavigation from './DrawerNavigation'
const Stac = createStackNavigator()
const MealNavigation = () => {
  return (
    <Stac.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerTintColor:'white',
      headerStyle:{
        backgroundColor:'#59f764'
      }
    }}
    
    >
      <Stac.Screen 
      name ='Category'
       component={CategoriesScreen}
       options={{
         headerLeft:()=><Menu name="menu" size={30} style={{paddingLeft:10}} />
       }}
       />
      <Stac.Screen name="Meal" component={CategoryMealScreen} options={({ route }) => ({ title: route.params.title })}/>
      <Stac.Screen 
      name='Detail' 
      component={MealDetailScreen}
      options={{
        headerRight:()=><Star name="star" size={25} style={{paddingRight:10}} color={'white'}/>,
      
      }}
      />
      <Stac.Screen name="Item" component={RenderItem}/>
      <Stac.Screen name="Item2" component={RenderItem2}/>
      
    </Stac.Navigator>

  )
}

export default MealNavigation
