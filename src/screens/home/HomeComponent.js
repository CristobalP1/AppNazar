import { View, Text } from "react-native";
import React from "react";
import TableEmployees from "./components/TableEmployees/TableEmployees";
import styles from "./HomeStyles";

const HomeComponent = ({ data, rutaProfile }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empleados</Text>
      <TableEmployees data={data} ruteProfile={rutaProfile}></TableEmployees>
    </View>
  );
};

export default HomeComponent;
