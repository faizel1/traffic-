import React, { useState } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, FlatList,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    width: '80%', // Adjust the width as needed
    color:"black"

  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    color:"black"
  },
  optionText: {
    fontSize: 16,    color:"black"

  },
});

const Dropdown = ({ data, selectedValue, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu-down");

  const handleSelect = (item) => {
    onSelect(item);
    setIsVisible(false);
    setMenuIcon("menu-down")
  };

  return (
    <View style={{width:100,bottom:8}} >
      <TouchableWithoutFeedback onPress={() => {setIsVisible(true);    setMenuIcon("menu-up")
}} >
        <View style={{width:100,width:100,display:"flex",flexDirection:"row", alignItems:"center",borderColor:"#55F38E",borderBottomWidth:2 }}>
          <Text style={{color:"black",fontSize:18}} >{selectedValue}</Text>
          <Icon name={menuIcon} size={40} color="black" />

        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={styles.container}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback onPress={() => handleSelect(item)}>
                    <View style={styles.option}>
                      <Text style={styles.optionText}>{item}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                keyExtractor={(item) => item}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};


const options = ['driver 1', 'driver 2', 'driver 3'];

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <Text>Selected option: {selectedOption}</Text>
      <Dropdown
        data={options}
        selectedValue={selectedOption}
        onSelect={handleSelectOption}
      />
    </View>
  );
};


export default MyDropdown;
