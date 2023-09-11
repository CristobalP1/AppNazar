import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const CardProfile = ({name}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Conductor:</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        flexDirection:'row',
        padding:20,
        borderRadius:8,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
        margin:10
    },
    label:{
        fontSize:12,
        marginRight:10
    },
    text:{
        fontSize:12,
        fontWeight:'bold',
    }
})


export default CardProfile