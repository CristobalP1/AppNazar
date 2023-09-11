import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeContainer from "../screens/home/HomeContainer";
import ProfileContainer from "../screens/profile/ProfileContainer";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle:{
        elevation:0,
        shadowColor:'transparent'
      },
      cardStyle:{
        backgroundColor:'white'
      }
    }}
    >
      <Stack.Screen name="Home" component={HomeContainer} options={{title:'Home'}}></Stack.Screen>
      <Stack.Screen name="Profile" component={ProfileContainer} options={{title:'Profile'}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
