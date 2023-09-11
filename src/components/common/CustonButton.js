import { TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const CustonButton = (props) => {
  const { iconName, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={iconName} size={25} color="black" />
    </TouchableOpacity>
  );
};

export default CustonButton;
