import { View, Text, Image, Animated, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreenStyleSheet from '../StyleSheets/HomeScreenStyleSheet';

const HomeScreen = () => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState([{lable: "Token Balanced", data: "12,435"}, {lable: "Consumed Token", data: "2,155"}, {lable: "Questions", data: 3},{lable: "Answer", data: 4},])
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


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

  const UserProfileData = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity style={HomeScreenStyleSheet.userProfileCard}>
        <Text style={HomeScreenStyleSheet.dataText}>{item.data}</Text>
        <Text style={HomeScreenStyleSheet.lableText}>{item.lable}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={HomeScreenStyleSheet.userProfileDataContainer}>
        <FlatList
          data={userData}
          renderItem={renderItem}
          numColumns={2} // Number of columns in the grid
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  

  return (
    <Animated.View style={HomeScreenStyleSheet.container}>
      <UserProfileContainer/>
      <UserProfileData />
    </Animated.View>
  )
}

export default HomeScreen