import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View ,Pressable} from 'react-native'
const renderGridItem = ({post}) => {
      const navigation=useNavigation()
      return (
        <Pressable
          style={{
            flex:1,
            margin:15,
            height:150,
            backgroundColor:post.color,
            borderRadius:10,
            elevation:3,
            alignItems:'flex-end',
            justifyContent:'flex-end',
            overflow:'hidden'
          }}
          onPress={() => {
            navigation.navigate("Meal",{
              categoryId:post.id
            });
          }}
        >
          <View >
            <Text style={{padding:10,color:'black',fontWeight:'bold'}}>{post.title}</Text>
          </View>
        </Pressable>
      );
    };

export default renderGridItem
