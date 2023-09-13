import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cellId: {
    padding: 5,
    fontWeight: "bold",
    color: "#333",
  },
  cellName: {
    flex: 1,
    padding: 5,
    color: "#555",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    flex: 1,
  },
});

export default styles;
