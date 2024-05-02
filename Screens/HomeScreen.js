import { View, Text, Image, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreenStyleSheet from '../StyleSheets/HomeScreenStyleSheet';
import { useSelector, useDispatch } from 'react-redux';
import { setWaitForLoading } from "../Helpers/Redux/waitForLoadingSlice";

const HomeScreen = () => {
  const [user, setUser] = useState({});
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const waitForLoading = useSelector((state) => state.waitForLoading.waitForLoading)
  const dispatch = useDispatch();

  const handleAnimationComplete = () => {
    // dispatch(setWaitForLoading(false));
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start(handleAnimationComplete());
  }, [fadeAnim, handleAnimationComplete()]);


  const getUserStored = async() => {
    const userStored = await AsyncStorage.getItem('user');
    setUser(JSON.parse(userStored)); 
  }

  useEffect(()=>{
      getUserStored();
  }, []);

  const UserProfileContainer = () => {
    return (
      <Animated.View style={HomeScreenStyleSheet.userProfileContainer}>
        <Image
          style={HomeScreenStyleSheet.userImage}
          source={{ uri: user.profilePic }}
        />
        <Text style={HomeScreenStyleSheet.emailText}>{user.email}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={HomeScreenStyleSheet.container}>
      <UserProfileContainer/>
    </View>
  )
}

export default HomeScreen