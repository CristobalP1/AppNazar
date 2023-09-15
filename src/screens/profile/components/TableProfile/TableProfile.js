import { View, Text, FlatList } from "react-native";
import React from "react";
import CustonButton from "../../../../components/common/CustonButton";
import { useState, useEffect } from "react";
import styles from "./TableProfileStyles";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImage } from "../../../../services/UserService";

const TableProfile = ({ dataPhoto }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [fotoId, setFotoId] = useState(null);


  const loadImage = async (id) => {
      try {
        const data = await fetchImage(id);
        setCurrentImage(data.imageBase64);
        setIsModalVisible(true);
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
      }
  };
  const openImage = async (id) => {
    await loadImage(id);
  };

  const closeImage = () => {
    setIsModalVisible(false);
    setCurrentImage(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataPhoto}
        keyExtractor={(item) => item.foto_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cellId}>{item.foto_id}</Text>
            <Text style={styles.cellName}>{item.nombre_foto}</Text>
            <CustonButton
              style={styles.button}
              iconName="image"
              onPress={() => {
                openImage(item.foto_id);
              }}
            ></CustonButton>
          </View>
        )}
      ></FlatList>

      <ImageModal
        isVisible={isModalVisible}
        closeImage={closeImage}
        imageUri={currentImage}
      ></ImageModal>
    </View>
  );
};

export default TableProfile;