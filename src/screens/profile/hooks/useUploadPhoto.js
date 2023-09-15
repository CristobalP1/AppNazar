import { upPhoto } from "../../../services/UserService";
import { useState } from "react";

const useUploadPhoto = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const uploadPhoto = async (photoData) => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      console.log("dataPhoto:", photoData);
      console.log(photoData._parts[0][1]);
      let response = await upPhoto(photoData);
      console.log("data:", response.data);
      console.log("request:", response.request);
      console.log("statusText:", response.statusText);
      console.log("Status:", response.status);
      console.log("dataResponse:", photoData);
      setUploadSuccess(true);
      return response;
    } catch (error) {
      if (error.response) {
        // La petición se hizo y el servidor respondió con un status fuera del rango 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // La petición se hizo pero no se recibió respuesta
        console.log(error.request);
      } else {
        // Algo sucedió al configurar la petición y se disparó un error
        console.log("Error", error.message);
      }
      setUploadError(error);
      return error;
    } finally {
      setIsUploading(false);
    }
  };

  console.log();

  return {
    isUploading,
    uploadError,
    uploadSuccess,
    uploadPhoto,
  };
};

export default useUploadPhoto;
