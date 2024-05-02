import { useEffect, useState} from "react";
import { TouchableOpacity, Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from './Helpers/Redux/isLoginSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setWaitForLoading } from "./Helpers/Redux/waitForLoadingSlice";

const Stack = createNativeStackNavigator();

import LoginScreen from "./Screens/LoginScreen";
import MyTabs from "./Screens/MyTabs";
import valiateLogin from "./Helpers/validateLogin";
import LoadingScreen from "./Screens/LoadingScreen";

const App = () => {
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const waitForLoading = useSelector((state) => state.waitForLoading.waitForLoading)
  const dispatch = useDispatch();

  useEffect(()=>{
    isLoginCheck();
  }, []);
  
  const handleAnimationComplete = () => {
    dispatch(setWaitForLoading(false));
  };

  const isLoginCheck = async() => {
    const auth_token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY);
    if(auth_token == null){
      handleAnimationComplete();
      return;
    }
     const response = await valiateLogin(auth_token);
     if(response.is_valid != null){
      handleSetIsLogin(response.is_valid);
     }else{
      alert(response.error);
     }
     handleAnimationComplete();
  };

  const handleSetIsLogin = (value) => {
    dispatch(setIsLogin(value));
  }

  const LogoTitle = () => {
    return (<Image
      style={{width: 100, height: 50}}
      source={require("./assets/upscailogolong.png")}/>)
          
  }

  const LogoutBtn = () => {
    return (
    <TouchableOpacity 
       onPress={async () => {
         await AsyncStorage.removeItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY); 
         handleSetIsLogin(false)
         }}>
        <MaterialCommunityIcons 
        name="logout" size={24} 
        color="#FFFFFF" />
    </TouchableOpacity>)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={waitForLoading ? "LoadingScreen" : (isLogin? "MyTabs" : "LoginScreen")}>
        {waitForLoading ? 
        <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false}}
          /> : 
        (isLogin? 
        <>
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{
              headerTitle: (props) => <LogoTitle />,
              headerStyle: {
                backgroundColor: "#01212E",
              },
              headerRight: () => <LogoutBtn />
            }}
          />
        </> :
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false}}
          />
        </>)}
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;