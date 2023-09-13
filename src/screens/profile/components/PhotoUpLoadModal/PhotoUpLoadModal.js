import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import React from "react";
import { useState } from "react";
import PhotoRequest from "../../models/Photo";
import styles from "./PhotoUpLoadModalStyles";

const PhotoUpLoadModal = ({
  isVisible,
  onClose,
  onUpload,
  userParams,
  tempRes,
}) => {
  const [photoName, setphotoName] = useState(null);

  const validateNamePhoto = () => {
    if (!photoName || photoName.length <= 0) {
      return "El nombre de la foto es necesario";
    }
    return null;
  };

  const handleUpload = async () => {
    const errorMessage = validateNamePhoto();
    if (errorMessage) {
      Alert.alert("Error", errorMessage);
      return;
    }

    const photoData = new PhotoRequest(
        userParams.id,
        photoName,
        tempRes.uri
      );

    onUpload(photoData);
    onClose()
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View
          style={styles.modalContainer}
        >
          <View
            style={styles.modalStyles}
          >
            <Text style={styles.modalTitle}>Ingrese el nombre de la foto</Text>
            <TextInput
              value={photoName}
              onChangeText={setphotoName}
              style={styles.textInput}
              placeholder="Nombre de la foto"
            />
            <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PhotoUpLoadModal;
