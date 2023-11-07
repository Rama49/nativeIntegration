import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./src/Inscription/SignUp";
import Login from "./src/Inscription/Login";
import Forgot from "./src/Inscription/Forgot";
import Acceuil from "./src/Inscription/Acceuil";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Acceuil"
          component={ Acceuil}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
