import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import Questions from './Questions';
import NewQuestion from './NewQuestion';

const Tab = createBottomTabNavigator();

const MyTabs = () => {

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Questions') {
              iconName = focused ? 'questioncircle' : 'questioncircleo';
              return <AntDesign name={iconName} size={size} color={color} />
            } else if (route.name === 'NewQuestion') {
              iconName = focused ? 'pencil-circle' : 'pencil-circle-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />
            }
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 50,
            paddingHorizontal: 2,
            backgroundColor: '#000000',
            borderTopColor: '#FFFFFF',
            borderTopWidth: 0.2,
        },
          tabBarHideOnKeyboard: true
        })}
    >
      <Tab.Screen 
         name="Home" 
         component={HomeScreen} 
         options={{
          headerShown: false,  
         }}/>
      <Tab.Screen 
         name="Questions" 
         component={Questions} 
         options={{
          headerShown: false,  
         }}/>

      <Tab.Screen 
          name="NewQuestion" 
          component={NewQuestion} 
          options={{
            headerShown: false,
          }}/>  
    </Tab.Navigator>
  )
}

export default MyTabs