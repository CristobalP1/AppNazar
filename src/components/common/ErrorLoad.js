import { View, Text, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const ErrorLoad = ({title,onPress}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{title}</Text>
      <Button title='Volver a cargar' onPress={onPress}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    errorContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'#f5f5f5'
    },
    errorText:{
        fontSize:18,
        fontWeight:'bold',
        color:'red',
        marginBottom:20
    }
})

export default ErrorLoad