import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { getPhotoUser } from "../../services/UserService";
import Profile from "./Profile";
import useDataProfile from "./hooks/useDataProfile";
import Loading from "../../components/common/Loading";
import ErrorLoad from "../../components/common/ErrorLoad";

const ProfileContainer = ({ navigation, route }) => {
  const { id } = route.params;

  const { dataProfile, error, isLoading, getDataProfile } = useDataProfile(
    getPhotoUser,
    id
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    console.log(error);
    return (
      <ErrorLoad title="Error de servicio" onPress={getDataProfile}></ErrorLoad>
    );
  }

  return (
    <Profile
      dataProfile={dataProfile}
      routeProfile={navigation}
      reloadData={getDataProfile}
      userParams={route.params}
    ></Profile>
  );
};

export default ProfileContainer;
