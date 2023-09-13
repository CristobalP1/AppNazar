import apiClient from "./api";

const getUsers = () => {
  const response = apiClient.get("/camioneros");
  return response;
};

const getPhotoUser = (id) => {
  return apiClient.get(`/camioneros/${id}/fotos`);
};

const upPhoto = (data) => {
  return apiClient.post(`/fotos`, data);
};

export { getPhotoUser, getUsers, upPhoto };
