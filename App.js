import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pages1 from "./pages/Pages1";
import Pages2 from "./pages/Pages2";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pages1" component={Pages1} />
        <Stack.Screen name="Pages2" component={Pages2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
