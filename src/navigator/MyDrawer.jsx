import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../pages/SettingsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import TabNavigator from "./TabNavigator";
import CustomDrawerContent from "../component/CustomDrawerContent";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    
    );
  }

  export default MyDrawer;