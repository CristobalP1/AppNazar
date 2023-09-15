import { View, Text, Modal, Image } from "react-native";
import React from "react";
import CustonButton from "../../../../components/common/CustonButton";
import styles from "./ImageModalStyles";

const ImageModal = ({ isVisible, closeImage, imageUri }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={closeImage}
    >
      <View style={styles.modalContainer}>
        <View style={styles.imageModal}>
          <Image
            source={imageUri}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <CustonButton iconName="close" onPress={closeImage} />
        </View>
      </View>
    </Modal>
  );
};

export default ImageModal;
