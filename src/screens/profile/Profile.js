import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect } from "react";
import TableProfile from "./components/TableProfile";
import { StyleSheet } from "react-native";
import UpButton from "./components/UpButton";
import CardProfile from "./components/CardProfile";
import { launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import Photo from "./models/Photo";
import { Modal } from "react-native";

const Profile = ({ dataProfile, routeProfile }) => {
  useEffect(() => {
    routeProfile.setOptions({
      headerBackTitle: "Back",
    });
  }, []);

  const randomValue = Math.floor(Math.random() * 1000) + 1;

  const [photoName, setphotoName] = useState(null);
  const [isVisbleModal, setIsVisbleModal] = useState(false);
  const [tempPhoto, setTempPhoto] = useState([]);
  const [tempRes, setTempRes] = useState([]);

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
      console.log("cancelado");
      return;
    }

    if (!resp.assets || resp.assets.length < 0) {
      return;
    }

    setTempRes(resp.assets[0]);

    openModal();
  };

  console.log(photoName);

  return (
    <View style={styles.container}>
      <CardProfile name={dataProfile.name}></CardProfile>
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
      <TableProfile data={tempPhoto}></TableProfile>
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
              onPress={() => {
                const photoData = new Photo(
                  randomValue,
                  photoName,
                  tempRes.uri
                );
                setTempPhoto((prevData) => [...prevData, photoData]);
                closeModal()
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
