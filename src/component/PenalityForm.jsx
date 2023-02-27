// import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
// import React,{useState} from 'react'
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const PenalityForm = () => {
//     const [text, setText] = useState('');

//     const handlePress = () => {
//         console.log('Submitted!');
//     };

//     return (
//       <View>
//         <Text>Enter some text:</Text>
//         <TextInput value={text} onChangeText={setText} />
//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//           <Button
//             title="Submit"
//             mode="contained"
//             onPress={handlePress}
//             icon={({ color, size }) => (
//                 <Icon name="check" size={size} color={color} />
//                 )}
//                 >
//             Submit
//           </Button>
//         </View>
//       </View>
//     );
// };

// export default PenalityForm

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CalendarIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import MapIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput as NativeTextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Dimensions } from "react-native";
import DataTableExample from "./DataTable";
import TableExample from "./TableExample";
import AutoCompleteTable from "./AutoCompleteTable";
import { accidentTypes, citiesOfOromia, oromiaZones } from "../Data/MockData";
const { width, height } = Dimensions.get("window");

const PenalityForm = () => {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [zone, setZone] = useState("");
  const [woreda, setWoreda] = useState("");
  const [kebele, setKebele] = useState("");
  const [gpsLocation, setGpsLocation] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const getProgressBarProgress = () => {
    return (step - 1) / 2; // Total number of steps is 2
  };
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = (stepo, icon) => {
    return (
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color={stepo == step ? "#55F38E" : "gray"}
      />
    );
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {step === 1 && (
            <>
              <Text style={{ color: "black" }}>Choose Driver</Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                    <TableExample />

                
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginTop: 10,
                  }}
                >
                  <Button
                    mode="contained"
                    onPress={handleNext}
                    icon={({ color, size }) => (
                      <Icon name="arrow-forward" size={size} color={color} />
                    )}
                  >
                    Next
                  </Button>
                </View>
              </View>
            </>
          )}
          {step === 2 && (
            <>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.date}>
                  <Text style={styles.dateText}>
                    {date.toLocaleDateString()}
                  </Text>

                  <Button
                    title="Select Date"
                    onPress={() => setShowPicker(true)}
                  >
                    <CalendarIcon name="calendar-sharp" size={20} />
                  </Button>
                  {showPicker && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      Submit
                      mode="date"
                      is24Hour={true}
                      display="calendar"
                      onChange={handleDateChange}
                      style={styles.dateTimePicker}
                    />
                  )}
                </View>

                <SelectDropdown
                  defaultButtonText="Accident Type"
                  data={accidentTypes}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  renderDropdownIcon={(isOpened) => {
                    return (
                      <FontAwesome
                        name={isOpened ? "chevron-up" : "chevron-down"}
                        color={"#444"}
                        size={18}
                      />
                    );
                  }}
                />
                <Text style={{ color: "black", marginVertical: 20 }}>
                  Address
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <SelectDropdown
                    buttonStyle={{ width: "45%" }}
                    buttonTextStyle={{ fontSize: 15 }}
                    defaultButtonText="Region"
                    data={citiesOfOromia}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    renderDropdownIcon={(isOpened) => {
                      return (
                        <FontAwesome
                          name={isOpened ? "chevron-up" : "chevron-down"}
                          color={"#444"}
                          size={18}
                        />
                      );
                    }}
                  />
                  <SelectDropdown
                    buttonStyle={{ width: "45%" }}
                    buttonTextStyle={{ fontSize: 15 }}
                    defaultButtonText="Zone"
                    data={oromiaZones}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    renderDropdownIcon={(isOpened) => {
                      return (
                        <FontAwesome
                          name={isOpened ? "chevron-up" : "chevron-down"}
                          color={"#444"}
                          size={18}
                        />
                      );
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginVertical: 15,
                  }}
                >
                  <TextInput
                    placeholder="Woreda"
                    value={woreda}
                    onChangeText={setWoreda}
                    style={{ width: "45%", fontSize: 12 }}
                  />
                  <TextInput
                    value={kebele}
                    onChangeText={setKebele}
                    placeholder="Kebele"
                    style={{ width: "45%" }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginVertical: 5,
                    marginLeft: 10,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      onChangeText={setGpsLocation}
                      value={gpsLocation}
                      placeholder="GPS Location"
                      style={{ width: "75%", marginRight: 15 }}
                    />
                    <MapIcon
                      name="map-marker-radius-outline"
                      size={50}
                      color="#000"
                    />
                  </View>

                  <TextInput
                    onChangeText={setSpecificAddress}
                    value={specificAddress}
                    placeholder="Specific Address"
                    style={{ width: "75%", marginVertical: 15 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Button
                    mode="contained"
                    onPress={handlePrev}
                    icon={({ color, size }) => (
                      <Icon name="arrow-back" size={size} color={color} />
                    )}
                  >
                    Previous
                  </Button>
                  <Button
                    mode="contained"
                    onPress={() => console.log("Submitted!")}
                    icon={({ color, size }) => (
                      <Icon name="check" size={size} color={color} />
                    )}
                  >
                    Submit
                  </Button>
                </View>
              </View>
            </>
          )}
        </View>
        <View style={styles.progress}>
          {renderStep(1, "circle", "#3f51b5")}
          {renderStep(2, "circle", "#f44336")}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 0.95 / 1,
    padding: 20,
    margin: 0,
    marginTop: 30,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 0.1,
    position: "relative",
    height: height - 270,
  },
  dateTimePicker: {
    backgroundColor: "#000",
  },
  date: {
    color: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  progress: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 50, // Set border radius to create circular shape
    color: "black",
  },
  stepText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
  iconContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  iconBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 50, // Set border radius to create circular shape
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
});

export default PenalityForm;
