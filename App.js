import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";

const Stack = createNativeStackNavigator();

import LoginScreen from "./Screens/LoginScreen";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
             </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);