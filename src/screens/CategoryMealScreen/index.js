import React,{useEffect} from 'react'
import { View, Text, Button,FlatList } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {CATEGORIES,MEALS} from '../../data/data'

import RenderItem2 from '../../components/RenderItem2'
const CategoryMealScreen = ({route}) => {
      const {categoryId} = route.params
      const navigation = useNavigation()
      const selected = CATEGORIES.find(item=>item.id===categoryId)
      const display = MEALS.filter((meal)=>meal.categoryIds.indexOf(categoryId)>=0)
      useEffect(() => {
            navigation.setOptions({
              title: selected.title,
            });
          }, [selected.title, navigation]);
      
      return (
            <View style={styles.container}>
                  <FlatList 
                  data={display}
                  keyExtractor={item=>item.id}
                  renderItem={({item})=><RenderItem2 post={item}/>}
                  />
            </View>
      )
}

export default CategoryMealScreen
