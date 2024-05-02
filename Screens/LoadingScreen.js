import { View, StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const LoadingScreen = () => {
  
  return (
    <View style={style.container}>
        <StatusBar style="light" backgroundColor="black"/>
        <ActivityIndicator color="white" size={40} />
    </View>
  )
}

let style = StyleSheet.create({
   container: {
    width: '100%',
    height: "100%",
    backgroundColor: "#01212E",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   }
})

export default LoadingScreen