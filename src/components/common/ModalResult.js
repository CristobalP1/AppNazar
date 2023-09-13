import { View, Text, Button, Modal } from "react-native";
import React from "react";

const ModalResult = ({ condicion, currentModal, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={currentModal}
      onRequestClose={closeModal}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: 300,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          {condicion && currentModal ? (
            <Text style={{ color: "green", fontSize: 18 }}>
              ¡Carga exitosa!
            </Text>
          ) : (
            <Text style={{ color: "red", fontSize: 18 }}>
              ¡Error al cargar la foto!
            </Text>
          )}
          <Button title="Cerrar" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalResult;
