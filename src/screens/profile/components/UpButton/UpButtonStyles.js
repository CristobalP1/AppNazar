import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  upButton: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    marginTop: 20,
    width: "35%",
    justifyContent: "center",
    backgroundColor: "#3498db",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
