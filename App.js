import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from './Helpers/Redux/isLoginSlice';

const Stack = createNativeStackNavigator();

import LoginScreen from "./Screens/LoginScreen";
import MyTabs from "./Screens/MyTabs";
import valiateLogin from "./Helpers/validateLogin";

const App = () => {
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const dispatch = useDispatch();
  
  const isLoginCheck = async() => {
    const auth_token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY);
    if(auth_token == null){
      return;
    }
     const response = await valiateLogin(auth_token);
     if(response.is_valid != null){
      handleSetIsLogin(response.is_valid);
     }else{
      console.log(response)
      alert(response.error);
     }
  };

  const handleSetIsLogin = (value) => {
    dispatch(setIsLogin(value));
  }

  useEffect(()=>{
    isLoginCheck();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLogin? "MyTabs" : "LoginScreen"}>
        {isLogin? 
        <>
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
          />
        </> :
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false}}
          />
        </>}
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;