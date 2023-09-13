import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useEffect } from "react";
import TableProfile from "./components/TableProfile/TableProfile";
import { StyleSheet } from "react-native";
import UpButton from "./components/UpButton/UpButton";
import CardProfile from "./components/CardProfile/CardProfile";
import { launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import PhotoRequest from "./models/Photo";
import { Modal } from "react-native";
import useUploadPhoto from "./hooks/useUploadPhoto";
import Loading from "../../components/common/Loading";

const Profile = ({ dataProfile, routeProfile, reloadData, userParams }) => {
  useEffect(() => {
    routeProfile.setOptions({
      headerBackTitle: "Back",
    });
  }, []);

  const [photoName, setphotoName] = useState(null);
  const [isVisbleModal, setIsVisbleModal] = useState(false);
  const [tempRes, setTempRes] = useState([]);
  const [hasAttemptedUpload, setHasAttemptedUpload] = useState(false);
  const {
    isUploading,
    uploadError,
    uploadSuccess,
    uploadPhoto,
    isRequestFinished,
  } = useUploadPhoto();

  useEffect(() => {
    if (uploadSuccess && !isUploading) {
      console.log("Foto subida");
      reloadData();
      closeModal();
    } else if (uploadError) {
      console.log("Error en al carga", uploadError);
    }
  }, [hasAttemptedUpload]);

  const handleSavePhoto = async (data) => {
    let uploadData = await uploadPhoto(data);
    setHasAttemptedUpload(true);
    return uploadData;
  };

  const validateNamePhoto = () => {
    if (!photoName || photoName.length <= 0) {
      return "El nombre de la foto es necesario";
    }
    return null;
  };

  const openModal = () => {
    setIsVisbleModal(true);
  };

  const closeModal = () => {
    setIsVisbleModal(false);
    setphotoName(null);
  };

  const takePhoto = async () => {
    let resp = await launchCameraAsync({
      mediaType: "photo",
      quality: 0.5,
    });

    if (resp.canceled) {
      return;
    }

    if (!resp.assets || resp.assets.length < 0) {
      return;
    }

    setTempRes(resp.assets[0]);

    openModal();
  };
  

  if (isUploading) {
    <Loading></Loading>;
  }

  return (
    <View style={styles.container}>
      <CardProfile name={userParams.nombre}></CardProfile>
      <View style={{ flexDirection: "row-reverse" }}>
        <UpButton
          iconName="upload"
          text="subir archivo"
          onPress={takePhoto}
        ></UpButton>
      </View>
      <View>
        <Text style={styles.title}>Archivos</Text>
      </View>
      <TableProfile dataPhoto={dataProfile}></TableProfile>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisbleModal}
        onRequestClose={closeModal}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: 300,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Text>Ingrese el nombre de la foto</Text>
            <TextInput
              value={photoName}
              onChangeText={setphotoName}
              style={{
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 5,
                marginTop: 10,
                padding: 5,
              }}
            />
            <Button
              title="Guardar"
              onPress={async () => {
                const menssageError = validateNamePhoto();

                if (!menssageError) {
                  const photoData = new PhotoRequest(
                    userParams.id,
                    photoName,
                    tempRes.uri
                  );
                  await handleSavePhoto(photoData);
                  closeModal();
                } else {
                  Alert.alert("Error", menssageError);
                }
              }}
            ></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 20,
  },
});

export default Profile;
