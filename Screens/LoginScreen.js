import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import LoginScreenStyleSheet from '../StyleSheets/LoginScreenStyleSheet'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [hidePassword, setHidePassword] = useState(true)

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
        <TouchableOpacity style={LoginScreenStyleSheet.loginButton}>
            <Text style={LoginScreenStyleSheet.buttonText}>Log in</Text>
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
        <Text style={LoginScreenStyleSheet.versionText}>v 0.0.1</Text>
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