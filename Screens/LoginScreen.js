import { View, Text, Image, TextInput, ActivityIndicator, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import LoginScreenStyleSheet from '../StyleSheets/LoginScreenStyleSheet'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import Login from '../Helpers/login';
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../Helpers/Redux/isLoginSlice';

const LoginScreen = ({ navigation, route }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [hidePassword, setHidePassword] = useState(true);
const [waitForLogin, setWaitForLogin] = useState(false);

const dispatch = useDispatch();

const handleSetIsLogin = (value) => {
  dispatch(setIsLogin(value));
}

const handleLogin = async() => {
    if(username.trim()==''){
      alert("Enter Username");
      return;
    }
    if(password.trim()==''){
      alert("Enter Password");
      return;
    }
    setWaitForLogin(true);
    const loginResponse = await Login(username, password);
    if (loginResponse.token) {
      await AsyncStorage.setItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY, loginResponse.token);
      handleSetIsLogin(true);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "MyTabs",
            },
          ],
        })
      );
    }else{
      alert(loginResponse.error);
    }
    setWaitForLogin(false);
}

  const LogoComponant = () => {
    return (
        <View style={LoginScreenStyleSheet.logoContainer}>
            <Image
            style={LoginScreenStyleSheet.logo}
            source={require("../assets/upscailogo.png")}
            />
        </View>
    )
  }  

  const InputComponent = () => {
    const handleSetUsername = (value) => {
        setUsername(value)
    }

    const handleSetPassword = (value) => {
        setPassword(value);
    }

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword)
    }
    return(
        <View style={LoginScreenStyleSheet.inputContainer}>
            {username == '' ? <Text></Text> : <Text style={LoginScreenStyleSheet.placeholderText}>Username</Text>}
            <TextInput
                style={LoginScreenStyleSheet.input}
                placeholder={"Username"}
                placeholderTextColor="gray"
                value={username}
                onChangeText={(value) => handleSetUsername(value)}
            />
            {password == '' ? <Text></Text> : <Text style={LoginScreenStyleSheet.placeholderText}>Password</Text>}
            <TextInput
                style={LoginScreenStyleSheet.input}
                placeholder={"Password"}
                placeholderTextColor="gray"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={(value) => handleSetPassword(value)}
            />
            <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={LoginScreenStyleSheet.eyeIcon}
                >
                <Ionicons
                    name={hidePassword ? "eye" : "eye-off"}
                    size={20}
                    color="grey"
                />
            </TouchableOpacity>
        </View>
    )
  }

  const ButtonComponent = () => {
    return (
        <View style={LoginScreenStyleSheet.loginButtonContainer}>
        <TouchableOpacity style={LoginScreenStyleSheet.loginButton}
         onPress={() => handleLogin()}
         disabled={waitForLogin}>
          {waitForLogin? <ActivityIndicator color="white" size={24} /> : 
          <Text style={LoginScreenStyleSheet.buttonText}>Log in</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={LoginScreenStyleSheet.forgotPasswordButton}>
            <Text style={LoginScreenStyleSheet.buttonText}>Forgotten Password?</Text>
        </TouchableOpacity>
        </View>
    )
  }

  const VersionInfoComponent = () => {
    return (
      <View style={LoginScreenStyleSheet.versionContainer}>
        <TouchableOpacity style={LoginScreenStyleSheet.newAccountButton}>
            <Text style={LoginScreenStyleSheet.newAccountButtonText}>Create New Account</Text>
        </TouchableOpacity>
        <Text style={LoginScreenStyleSheet.versionText}>{process.env.EXPO_PUBLIC_APP_VERSION}</Text>
      </View>
      )
  }

  return (
    <View style={LoginScreenStyleSheet.container}>
      <StatusBar style="light" backgroundColor="black"/>
      <LogoComponant/>
      {InputComponent()}
      <ButtonComponent/>
      <VersionInfoComponent/>
    </View>
  )
}

export default LoginScreen