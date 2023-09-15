import {
  View,
  Text,
  Modal,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import styles from "./PhotoUpLoadModalStyles";
import { upPhoto } from "../../../../services/UserService";
import FormDataModel from "../../models/FormDataModel";

const PhotoUpLoadModal = ({
  isVisible,
  onClose,
  onUpload,
  userParams,
  tempRes,
}) => {
  const [photoName, setphotoName] = useState(null);

  const validateNamePhoto = () => {
    if (!photoName || photoName.trim().length <= 0) {
      return "El nombre de la foto es necesario";
    }
    return null;
  };


  const handleUpload = async (dataFormPhoto) => {
    const errorMessage = validateNamePhoto();

    if (errorMessage) {
      Alert.alert("Error", errorMessage);
      return;
    }

    try {
      await upPhoto(dataFormPhoto);
      onUpload();
      onClose();
      setphotoName("");
    } catch (error) {
      console.error("Error subiendo la foto:", error);
      Alert.alert("Error", "Hubo un error al subir la foto.");
    }
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalStyles}>
            <Text style={styles.modalTitle}>Ingrese el nombre de la foto</Text>
            <TextInput
              value={photoName}
              onChangeText={setphotoName}
              style={styles.textInput}
              placeholder="Nombre de la foto"
            />
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={async()=>{
                const formDataModel = new FormDataModel(tempRes, photoName, userParams);
                const dataForm = formDataModel.createFormData();

                await handleUpload(dataForm)
              }}
            >
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PhotoUpLoadModal;
