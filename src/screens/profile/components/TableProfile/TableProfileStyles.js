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