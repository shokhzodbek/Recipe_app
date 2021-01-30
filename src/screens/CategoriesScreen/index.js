import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text,Button, FlatList,TouchableOpacity, Pressable } from 'react-native'
import styles from './styles'
import {CATEGORIES} from '../../data/data'
import RenderItem from '../../components/RenderItem'
const CategoriesScreen = (props) => {
      return (
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={CATEGORIES}
          renderItem={({item})=><RenderItem post={item}/>}
          numColumns={2}
        />
      );
    };

export default CategoriesScreen
