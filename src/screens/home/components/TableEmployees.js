import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CustonButton from '../../../components/common/CustonButton'
import { StyleSheet } from 'react-native'

const TableEmployees = ({data,ruteProfile}) => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      <View style={styles.row}>
        <Text style={styles.cell}>{item.name}</Text>
        <CustonButton style={styles.button} iconName="arrow-right" size={23} color="#3499db" onPress={() => {
          ruteProfile.navigate("Profile",{
            id:item.id
          });
        }} ></CustonButton>
      </View>
    )}
    ></FlatList>
  )
}



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    marginVertical:5,
    padding:15,
    borderRadius:10,
    backgroundColor:'white',
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.09,
    shadowRadius:2,
    elevation:2,
  },
  cell: {
    flex: 1,
    fontSize:16,
    color:"#333"
  }
});

export default TableEmployees