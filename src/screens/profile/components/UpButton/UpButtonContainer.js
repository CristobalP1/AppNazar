import React from "react";
import UpButton from "./UpButton";
import { launchCameraAsync } from "expo-image-picker";

const UpButtonContainer = ({ OpenModalSavePhoto }) => {
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

    OpenModalSavePhoto(resp.assets[0]);

  };

  return (
    <>
      <UpButton
        iconName="upload"
        text="subir archivo"
        onPress={async()=>{
          await takePhoto()
        }}
      ></UpButton>
    </>
  );
};

export default UpButtonContainer;
