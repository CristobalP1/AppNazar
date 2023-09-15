import apiClient from "./api";

const getUsers = () => {
  const response = apiClient.get("/camioneros");
  console.log(response);
  return response;
};

const getPhotoUser = (id) => {
  return apiClient.get(`/camioneros/${id}/fotos`);
};

const upPhoto = async (data) => {
  return await apiClient.post(`/fotos`, data,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  });
};

// const fetchImage = async (fotoId) => {
//   try {
//     const response = await apiClient.get(`/uploads/${fotoId}`);
//     return response.data; 
//   } catch (error) {
//     console.error('Error al obtener la imagen:', error);
//     throw error;
//   }
// };

export { getPhotoUser, getUsers, upPhoto };

// 'Content-Type': 'multipart/form-data',
