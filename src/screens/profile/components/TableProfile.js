import { View, Text, FlatList, Modal, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import CustonButton from '../../../components/common/CustonButton'
import { useState } from 'react'

const TableProfile = ({data}) => {

const [isModalVisible, setIsModalVisible] = useState(false);
const [currentImage, setCurrentImage] = useState(null);

const openImage = (uri) => {
  setCurrentImage(uri)
  setIsModalVisible(true)
}

const closeImage = () => {
  setIsModalVisible(false)
  setCurrentImage(null)
}


  return (
    <View>
    <FlatList
    data={data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      <View style={styles.row}>
        <Text style={styles.cellId}>{item.id}</Text>
        <Text style={styles.cellName}>{item.name}</Text>
        <CustonButton style={styles.button} iconName="image" onPress={() => {
          openImage(item.url)
        }} ></CustonButton>
      </View>

    )}
    ></FlatList>

    <Modal
    animationType='slide'
    transparent={false}
    visible={isModalVisible}
    onRequestClose={closeImage}
    >
      <View style={styles.modalContainer}>
        <View style={styles.imageModal}>
        <Image 
          source={{uri:currentImage}}
          style={styles.modalImage}
          resizeMode='contain'
        />
        <CustonButton
          iconName="close"
          onPress={closeImage}
        />
        </View>
      </View>
    </Modal>
    </View>

  )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      borderBottomWidth:1,
      borderBottomColor: '#ddd',
      padding: 10,
      backgroundColor:'white',
      marginBottom:5,
      borderRadius:8,
      shadowColor:"#000",
      shadowOffset:{
        width:0,
        height:2
      },
      shadowOpacity:0.1,
      shadowRadius:2,
      elevation:2
    },
    cellId: {
      padding: 5,
      fontWeight:'bold',
      color:'#333',
    },
    cellName:{
      flex: 1,
      padding: 5,
      color:'#555',
      fontSize:16,
      textAlign:'center'
    },
    button:{
      flex:1
    },
    modalContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0,5)'
    },
    imageModal:{
      width:'90%',
      height:'90%',
      backgroundColor:'white',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      padding:10
    },
    modalImage:{
      width:'100%',
      height:'80%',
      marginBottom:10
    }
  });
  

export default TableProfile