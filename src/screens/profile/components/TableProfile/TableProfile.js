import { View, Text, FlatList } from "react-native";
import React from "react";
import CustonButton from "../../../../components/common/CustonButton";
import { useState } from "react";
import styles from "./TableProfileStyles";
import ImageModal from "../ImageModal/ImageModal";

const TableProfile = ({ dataPhoto }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openImage = (uri) => {
    setCurrentImage(uri);
    setIsModalVisible(true);
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
                openImage(item.nombre_archivo);
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
