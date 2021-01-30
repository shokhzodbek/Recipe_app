import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text,Pressable, ImageBackground } from 'react-native'
import styles from './styles'
const RenderItem2 = ({post}) => {
      const navigation = useNavigation()
      return (<Pressable onPress={()=>navigation.navigate("Detail")}>
            <View style={styles.container}>
                  <ImageBackground
                  style={styles.image}
                   source={{uri:post.imageUrl}}>
            <View style={styles.row1}>
                  <Text style={styles.title} numberOfLines={2}>{post.title}</Text>
            </View></ImageBackground>
            <View style={styles.row}>
                  <Text>{post.duration}m</Text>
                  <Text>{post.complexity}</Text>
                  <Text>{post.affordability}</Text>
            </View>
            </View>
            </Pressable>
      )
}

export default RenderItem2
