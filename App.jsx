import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MyDrawer from "./src/navigator/MyDrawer";
import AppPicker from "./src/component/liwatch/AppPicker";
import Accident from "./src/component/Accident";
import AutocompleteInput, { RemoteDataSetExample2 } from "./src/component/AutocompleteInput";
import AutoCompleteTable from "./src/component/AutoCompleteTable";
import TableExample from "./src/component/TableExample";
import VehiclesTable from "./src/component/VehiclesTable";
import DriversTable from "./src/component/DriversTable";

const App = () => {
  return (
    // <DriversTable />
    // <VehiclesTable />
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"green"
  },
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  drawerHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  drawerHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  drawerBody: {
    flex: 1,
  },
  drawerFooter: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    alignItems: "flex-end",
  },
});
export default App;

//this componente is cutom picker becsues it isnt found on expo you should use the third party library for picker in the featur

