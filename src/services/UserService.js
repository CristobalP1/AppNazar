import apiClient from "./api";

const getUsers = () => {
  const response = apiClient.get("/camioneros");
  return response;
};

const getPhotoUser = (id) => {
  return apiClient.get(`/camioneros/${id}/fotos`);
};

const upPhoto = async (data) => {
  try {
    const response = await apiClient.post(`/fotos`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return response;
  } catch (error) {
    console.error('Error subiendo la foto:', error);
    throw error;
  }
};

const fetchImage = async (fotoId) => {
  try {
    const response = await apiClient.get(`/uploads/${fotoId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la imagen:', error);
    throw error;
  }
};

export { getPhotoUser, getUsers, upPhoto, fetchImage };

// 'Content-Type': 'multipart/form-data',
