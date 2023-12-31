import { ActivityIndicator, View, StyleSheet } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
