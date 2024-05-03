import { View, Text, Image, Animated, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreenStyleSheet from '../StyleSheets/HomeScreenStyleSheet';
import fetchUserProfileData from '../Helpers/fetchUserProfileData';
import { useNavigation } from '@react-navigation/native';
import CustomBadge from '../Helpers/CustomBadge';
import { ActivityIndicator } from 'react-native-paper';

const HomeScreen = () => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      tabBarBadge: warnings.length > 0? <CustomBadge/> : null,
      tabBarBadgeStyle: {
        backgroundColor: 'transparent'
      }
    });
    return () => {
      navigation.setOptions({
        tabBarBadge: null
      });
    };
  }, [navigation, warnings]); 

  useEffect(() => {
    fetchUserProfileDataRquest();
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  const fetchUserProfileDataRquest = async () => {
    const auth_token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY);
    const response = await fetchUserProfileData(auth_token);

    if(response.user_data){
       setUserData(response?.user_data);
       setWarnings(response?.user_warnings)
    }else{
      alert(response.error)
    }
  }

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

  const UserWarningsComponent = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity style={{...HomeScreenStyleSheet.warningCard, ...{backgroundColor: item.levle}}}>
        <Text style={HomeScreenStyleSheet.warningsText}>{item.text}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={HomeScreenStyleSheet.userWarningContainer}>
        <FlatList
          data={warnings}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  

  return (
    <Animated.View style={HomeScreenStyleSheet.container}>
      <UserProfileContainer/>
      {warnings.length > 0? <UserWarningsComponent/> : null}
      {userData.length > 0 ? <UserProfileData /> : <ActivityIndicator size={30} color='#FFFFFF'/>}
    </Animated.View>
  )
}

export default HomeScreen