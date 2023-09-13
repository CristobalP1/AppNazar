import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ddd",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 2,
    elevation: 2,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});

export default styles;
