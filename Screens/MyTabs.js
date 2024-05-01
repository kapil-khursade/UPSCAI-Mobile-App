import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTabs = () => {
  return (
    <View>
      <TouchableOpacity onPress={async () => {await AsyncStorage.removeItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY);}}>
        <Text>MyTabs</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyTabs