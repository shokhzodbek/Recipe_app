import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
 container:{
       width:'100%',
       height:200,
       marginBottom:10
 },
  row :{
        flexDirection:'row',
        height:'10%',
        justifyContent:'space-between',
        paddingHorizontal:10,
        backgroundColor:'lightgrey',

         
  },
  row1:{
        height:'90%',
  },
  image:{
        width:'100%',
        backgroundColor:'white'
      
  },
  title:{
        backgroundColor:'red',
        paddingHorizontal:12,
        paddingVertical:5,
        color:'white',
        fontSize:20,
        backgroundColor:'rgba(0,0,0,0.7)',
        textAlign:'center'
  }
})


export default styles


