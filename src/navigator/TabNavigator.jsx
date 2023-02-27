import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../pages/HomeScreen";
import NotificationScreen from "../pages/NotificationScreen";
import RegisterScreen from "../pages/RegisterScreen";
const { width, height } = Dimensions.get("window")

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    // <SafeAreaView  style={{flex:1}} >

    <View style={{ backgroundColor: "#fff", width,
    height:height-60, }}>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          // tabBarHideOnKeyboard:true,
          
          tabBarActiveTintColor: "#55F38E",
          tabBarInactiveTintColor: "#6F6F88",
          tabBarShowLabel: false,
          
          tabBarStyle: {
            backgroundColor: "#191A30",
            marginHorizontal: 40,
            borderRadius: 10,
            // bottom: 5,
            padding: 2,
            height: 60,
            // position:"absolute"
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "bell-ring" : "bell-ring-outline";
            } else if (route.name === "Register") {
              iconName = focused ? "archive-plus" : "archive-plus-outline";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={35} color={color} />;
          },
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Notification"
          component={NotificationScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
      </Tab.Navigator>
    </View>
    // </SafeAreaView>

  );
}
export default TabNavigator;