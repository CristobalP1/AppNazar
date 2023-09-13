import { View, Text, FlatList, Modal, Image } from "react-native";
import React from "react";
import CustonButton from "../../../../components/common/CustonButton";
import { useState } from "react";
import styles from "./TableProfileStyles";

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

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={closeImage}
      >
        <View style={styles.modalContainer}>
          <View style={styles.imageModal}>
            <Image
              source={{ uri: currentImage }}
              style={styles.modalImage}
              resizeMode="contain"
            />
            <CustonButton iconName="close" onPress={closeImage} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TableProfile;
