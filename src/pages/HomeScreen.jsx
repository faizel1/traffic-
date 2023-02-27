import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import HomeCard from "../component/HomeCard";

import { Provider } from "react-native-paper";
import DataTableExample from "../component/DataTable";
import DriverCard from "../component/DriverCard";

import MyDropdown from "../component/MyDropdown";
import Search from "../component/Search";


function HomeScreen() {
    const [showMyDropdown, setShowMyDropdown] = useState(false);
    const [gender, setGender] = useState("");
    const [showMultiSelectMyDropdown, setShowMultiSelectMyDropdown] = useState(false);
    const [colors, setColors] = useState("");
  
    const colorList = [
      {
        label: "White",
        value: "white",
      },
      {
        label: "Red",
        value: "red",
      },
      {
        label: "Blue",
        value: "blue",
      },
      {
        label: "Green",
        value: "green",
      },
      {
        label: "Orange",
        value: "orange",
      },
    ];
    return (
      <Provider theme={{ mode: "adaptive" }}>
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
          <ScrollView>
            <View style={{flexDirection:"row", justifyContent:"flex-end",alignItems:"center",paddingHorizontal:10}}>
  
            <MyDropdown />
            <Search />
            </View>
            <HomeCard />
            <DataTableExample />
            <DriverCard image="https://media.istockphoto.com/id/1386831709/photo/pink-retro-toy-car-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=AILH7FVkpzHN-CT2YSkeQPLTfr0RXyJ4Pb28wZYOl0o=" />
            <DriverCard image="https://media.istockphoto.com/id/1397503546/photo/generic-suv-car.jpg?b=1&s=170667a&w=0&k=20&c=nsfGe2VWie5Pk-M_9IIgJk8dG6m0v11cHZlE-j9_t9U=" />
            <DriverCard image="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <DriverCard image="https://media.istockphoto.com/id/1386831709/photo/pink-retro-toy-car-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=AILH7FVkpzHN-CT2YSkeQPLTfr0RXyJ4Pb28wZYOl0o=" />
            <DriverCard image="https://media.istockphoto.com/id/1397503546/photo/generic-suv-car.jpg?b=1&s=170667a&w=0&k=20&c=nsfGe2VWie5Pk-M_9IIgJk8dG6m0v11cHZlE-j9_t9U=" />
            <DriverCard image="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          
          </ScrollView>
        </View>
      </Provider>
    );
  }

  export default HomeScreen;