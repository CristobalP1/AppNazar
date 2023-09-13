import { upPhoto } from "../../../services/UserService";
import { useState } from "react";

const useUploadPhoto = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isRequestFinished, setIsRequestFinished] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const uploadPhoto = async (photoData) => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      let response = await upPhoto(photoData);
      setUploadSuccess(true);
      return response.status;
    } catch (error) {
      setUploadError(error);
    } finally {
      setIsUploading(false);
      setIsRequestFinished(true);
    }
  };

  return {
    isUploading,
    uploadError,
    uploadSuccess,
    uploadPhoto,
    isRequestFinished,
  };
};

export default useUploadPhoto;
