import { View, Text, Button } from 'react-native'
import React from 'react'
import Home from './Home';
import useDataEmployees from './hooks/useDataEmployees';
import { getUsers } from '../../services/UserService';
import Loading from '../../components/common/Loading';
import ErrorLoad from '../../components/common/ErrorLoad';

const HomeContainer = ({navigation}) => {

    const {
        employes,
        error,
        isLoading,
        getData
    } = useDataEmployees(getUsers);


    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        console.log(error);
        return (
        <ErrorLoad title="Error de servicio" onPress={getData}></ErrorLoad>
        )

    }
  return (
    <Home data={employes} rutaProfile={navigation}></Home>
  )
}

export default HomeContainer