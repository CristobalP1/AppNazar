import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import PhotoRequest from "../../models/Photo";
import styles from "./PhotoUpLoadModalStyles";
import { upPhoto } from "../../../../services/UserService";

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


  const createFormData = () => {

    if (!tempRes.uri || !photoName || typeof userParams.id !== 'number') {
      console.log("Faltan datos para subir la foto");
      return;
    }

    const data = new FormData();
  
    
    data.append("nombre_archivo", {
      uri: tempRes.uri,
      type: "image/jpeg",
      name: photoName + ".jpg",
    });
  
    data.append("camionero_id", userParams.id);
    data.append("nombre_foto", photoName);
  
    return data;
  };
  
  const handleUpload = async () => {
    const errorMessage = validateNamePhoto();
  
    if (errorMessage) {
      Alert.alert("Error", errorMessage);
      return;
    }
  
    const formData = createFormData();
  
    if (!tempRes.uri || !photoName || typeof userParams.id !== 'number') {
      console.log("Faltan datos para subir la foto");
      return;
  }

  if (!formData) {
    return Alert.alert("Error", "Hubo un error al cargar los archivos.");
  }
  
    try {
      const responseDta = await upPhoto(formData);
      console.log(responseDta);
  
      onUpload(formData);
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
              onPress={handleUpload}
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
