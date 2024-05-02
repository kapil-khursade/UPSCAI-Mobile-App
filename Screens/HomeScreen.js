import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreenStyleSheet from '../StyleSheets/HomeScreenStyleSheet';

const HomeScreen = () => {
  const [user, setUser] = useState({})

  const getUserStored = async() => {
    const userStored = await AsyncStorage.getItem('user');
    setUser(JSON.parse(userStored)); 
  }
  useEffect(()=>{
      getUserStored();
  }, []);

  const UserProfileContainer = () => {
    return (
      <View style={HomeScreenStyleSheet.userProfileContainer}>
        <Image
          style={HomeScreenStyleSheet.userImage}
          source={{ uri: user.profilePic }}
        />
        <Text style={HomeScreenStyleSheet.emailText}>{user.email}</Text>
      </View>
    );
  };

  return (
    <View style={HomeScreenStyleSheet.container}>
      <UserProfileContainer/>
      
    </View>
  )
}

export default HomeScreen