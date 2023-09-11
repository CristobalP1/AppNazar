import { useState, useEffect } from "react";
import ProfileEmployee from "../models/ProfileEmployee";

const useDataProfile = (getUsersApi, ...arg) => {
  const [dataProfile, setDataProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getDataProfile = async () => {
    setDataProfile(null);
    setError(null);
    setIsLoading(true);

    try {
      const response = await getUsersApi(...arg);
      const dataProfileEmployee = ProfileEmployee.fromApiResponse(response.data);
      setDataProfile(dataProfileEmployee);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return {
    dataProfile,
    error,
    isLoading,
    getDataProfile,
  };
};

export default useDataProfile;
