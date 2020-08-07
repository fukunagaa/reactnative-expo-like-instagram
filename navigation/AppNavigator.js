import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import UserScreen from "../screens/UserScreen";
import HeaderNavBar from "../components/HeaderNavBar";
import HeaderAccountBar from "../components/HeaderAccountBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: false,
        }}
      />
    </Stack.Navigator>
  );
};

const CameraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: false,
        }}
      />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
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
  );
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "User") {
      iconName = focused ? "user-o" : "user";
    } else if (route.name === "Camera") {
      iconName = "camera";
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

const tabBarOption = {
  activeTintColor: "black",
  inactiveTintColor: "gray",
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Camera" component={CameraStack} />
        <Tab.Screen name="User" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
