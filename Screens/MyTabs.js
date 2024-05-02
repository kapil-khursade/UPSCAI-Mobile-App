import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import Questions from './Questions';

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
            }
          },
          tabBarActiveTintColor: '#01212E',
          tabBarShowLabel: false,
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
         options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default MyTabs