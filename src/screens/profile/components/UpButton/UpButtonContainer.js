import { View, Text } from "react-native";
import React from "react";
import UpButton from "./UpButton";
import { launchCameraAsync } from "expo-image-picker";

const UpButtonContainer = ({isTakePhoto}) => {

    const [isTakePhoto, setIsTakePhoto] = useState(false);

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

    setIsTakePhoto(true);
  };

  return (
    <View>
      <UpButton
        iconName="upload"
        text="subir archivo"
        onPress={takePhoto}
      ></UpButton>
    </View>
  );
};

export default UpButtonContainer;
