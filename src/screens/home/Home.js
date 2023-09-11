import { View, Text } from "react-native";
import React from "react";
import TableEmployees from "./components/TableEmployees";
import { StyleSheet } from "react-native";

const Home = ({ data, rutaProfile }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empleados</Text>
      <TableEmployees data={data} ruteProfile={rutaProfile}></TableEmployees>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});


export default Home;
