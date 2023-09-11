import { useState, useEffect } from "react";
import Employee from "../models/Employee";


const useDataEmployees = (getUserApi) => {
  const [employes, setEmployes] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setEmployes(null);
    setError(null);
    setIsLoading(true);


    try {
      const response = await getUserApi();
      const employesData = response.data.results.map(Employee.fromApiResponse);
      setEmployes(employesData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    employes,
    error,
    isLoading,
    getData,
  };
};

export default useDataEmployees;
