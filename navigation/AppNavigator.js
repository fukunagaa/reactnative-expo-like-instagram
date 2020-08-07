import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/UserScreen";
import HeaderNavBar from "../components/HeaderNavBar";
import HeaderAccountBar from "../components/HeaderAccountBar";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: false,
            headerLeft: () => <HeaderAccountBar />,
            headerRight: () => <HeaderNavBar />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
