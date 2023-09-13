import { View, Text } from "react-native";
import React, { useEffect } from "react";
import TableProfile from "./components/TableProfile/TableProfile";
import CardProfile from "./components/CardProfile/CardProfile";
import { useState } from "react";
import useUploadPhoto from "./hooks/useUploadPhoto";
import Loading from "../../components/common/Loading";
import UpButtonContainer from "./components/UpButton/UpButtonContainer";
import PhotoUpLoadModal from "./components/PhotoUpLoadModal/PhotoUpLoadModal";
import styles from "./ProfileStyles";
import { Alert } from "react-native";

const Profile = ({ dataProfile, routeProfile, reloadData, userParams }) => {
  useEffect(() => {
    routeProfile.setOptions({
      headerBackTitle: "Back",
    });
  }, []);

  const [isVisbleModal, setIsVisbleModal] = useState(false);
  const [tempRes, setTempRes] = useState([]);
  const [hasAttemptedUpload, setHasAttemptedUpload] = useState(false);
  const {
    isUploading,
    uploadError,
    uploadSuccess,
    uploadPhoto,
  } = useUploadPhoto();

  useEffect(() => {
    if (uploadSuccess && !isUploading) {
      reloadData();
      closeModal();
      Alert.alert("Foto Subida con exito");
    } else if (uploadError) {
      Alert.alert("Error en subir la foto");
    }
  }, [hasAttemptedUpload]);

  const handleSavePhoto = async (data) => {
    let uploadData = await uploadPhoto(data);
    setHasAttemptedUpload(true);
    return uploadData;
  };

  const openModal = () => {
    setIsVisbleModal(true);
  };

  const closeModal = () => {
    setIsVisbleModal(false);
  };

  const OpenModalSavePhoto = (respDataPhoto) => {
    setTempRes(respDataPhoto);
    openModal();
  };

  if (isUploading) {
    <Loading></Loading>;
  }

  return (
    <View style={styles.container}>
      <CardProfile name={userParams.nombre}></CardProfile>
      <View style={styles.styleButton}>
        <UpButtonContainer
          OpenModalSavePhoto={OpenModalSavePhoto}
        ></UpButtonContainer>
      </View>
      <View>
        <Text style={styles.title}>Archivos</Text>
      </View>
      <TableProfile dataPhoto={dataProfile}></TableProfile>
      <PhotoUpLoadModal
        isVisible={isVisbleModal}
        onClose={closeModal}
        onUpload={handleSavePhoto}
        userParams={userParams}
        tempRes={tempRes}
      ></PhotoUpLoadModal>
    </View>
  );
};

export default Profile;
