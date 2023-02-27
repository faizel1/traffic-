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
import VehiclesTable from "./VehiclesTable";
import DriversTable from "./DriversTable";
import { accidentTypes, citiesOfOromia, oromiaZones } from "../Data/MockData";
const { width, height } = Dimensions.get("window");

const Accident = () => {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [zone, setZone] = useState("");
  const [woreda, setWoreda] = useState("");
  const [kebele, setKebele] = useState("");
  const [gpsLocation, setGpsLocation] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");

  const [lifLost, setLifLost] = useState("");
  const [majorInjury, setMajorInjury] = useState("");
  const [minorInjury, setMinorInjury] = useState("");
  const [lossCount, setLossCount] = useState("");
  const [lossMoney, setLossMoney] = useState("");
  const [description, setDescription] = useState("");

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
              <Text style={{ color: "black", marginBottom: 10 }}>General</Text>
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
                    // label="Last Name"
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
                      value={gpsLocation}
                      onChangeText={setGpsLocation}
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
                    value={specificAddress}
                    onChangeText={setSpecificAddress}
                    placeholder="Specification Address"
                    style={{ width: "75%", marginVertical: 15 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginTop: 10,
                    marginBottom: 0,
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
              <Text style={{ color: "black" }}>Vehicles</Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <VehiclesTable />
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
          {step === 3 && (
            <>
              <Text style={{ color: "black" }}>Drivers</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                
                  <DriversTable />
                
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
          {step === 4 && (
            <>
              <Text style={{ color: "black" }}>Accident Detail</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginVertical: 7,
                  }}
                >
                  <TextInput
                    placeholder="Life Lost"
                    value={lifLost}
                    onChangeText={setLifLost}
                    style={{ width: "45%", fontSize: 12 }}
                  />
                  <TextInput
                    value={majorInjury}
                    onChangeText={setMajorInjury}
                    placeholder="Major Injury"
                    style={{ width: "45%" }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginVertical: 7,
                  }}
                >
                  <TextInput
                    placeholder="Minor Injury"
                    value={minorInjury}
                    onChangeText={setMinorInjury}
                    style={{ width: "45%", fontSize: 12 }}
                  />
                  <TextInput
                    value={lossCount}
                    onChangeText={setLossCount}
                    placeholder="Property Loss count"
                    style={{ width: "45%", fontSize: 12 }}
                  />
                </View>
                <TextInput
                  value={lossMoney}
                  onChangeText={setLossMoney}
                  placeholder="Property loss in Money"
                  style={{ margin: 10 }}
                />
                <TextInput
                  value={description}
                  onChangeText={setDescription}
                  placeholder="Description"
                  multiline={true}
                  numberOfLines={5}
                  textAlign="left"
                  render={(innerProps) => (
                    <NativeTextInput
                      {...innerProps}
                      multiline
                      style={{
                        margin: 10,
                        fontSize: 12,
                        height: 200,
                        textAlignVertical: "top",
                        marginVertical: 10,
                        color: "black",
                      }}
                    />
                  )}
                  style={{
                    margin: 10,
                    fontSize: 12,
                    height: 200,
                    textAlignVertical: "top",
                  }}
                />
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
          {renderStep(3, "circle", "#f44336")}
          {renderStep(4, "circle", "#f44336")}
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
    padding: 10,
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

export default Accident;
