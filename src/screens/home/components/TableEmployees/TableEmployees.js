import { View, Text, FlatList } from "react-native";
import React from "react";
import CustonButton from "../../../../components/common/CustonButton";
import styles from "./TableEmployeesStyles";

const TableEmployees = ({ data, ruteProfile }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.camionero_id.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.nombre}</Text>
          <CustonButton
            style={styles.button}
            iconName="arrow-right"
            size={23}
            color="#3499db"
            onPress={() => {
              ruteProfile.navigate("Profile", {
                id: item.camionero_id,
                nombre: item.nombre,
              });
            }}
          ></CustonButton>
        </View>
      )}
    ></FlatList>
  );
};

export default TableEmployees;
