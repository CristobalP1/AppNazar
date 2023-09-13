import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./UpButtonStyles";

const UpButton = (props) => {
  const { iconName, text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.upButton}>
      <View style={styles.column}>
        <FontAwesome name={iconName} size={25} color="white" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UpButton;
