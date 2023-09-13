import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0,5)",
  },
  imageModal: {
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  modalImage: {
    width: "100%",
    height: "80%",
    marginBottom: 10,
  },
});

export default styles;
