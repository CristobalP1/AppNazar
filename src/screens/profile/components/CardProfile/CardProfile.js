import { View, Text } from "react-native";
import React from "react";
import styles from "./CardProfileStyles";

const CardProfile = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Conductor:</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default CardProfile;
