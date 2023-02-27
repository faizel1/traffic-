import { View, Text,StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DriverCard = (props) => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={{
          uri: props.image
        }}
      />  
      <View>

      <Text style={{color:"black"}}>AA C123444</Text>
      <Text style={{color:"black"}}>Feb 12 2023 3:37 AM</Text>
      </View>
      <Text style={{color:"black",padding:8,borderRadius:10, backgroundColor:"#CE8F30"}}>Reason Two</Text>
      <Icon name="dots-vertical" size={40} color="black" />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor:"white",
    color:"black",
    flexDirection:"row",
    elevation: 2,
    shadowColor: 'gray',
    margin:4,
    borderRadius:10,
  },
  logo: {
    width: 70,
    height: 60,
    borderRadius:10,
    margin :4

  }
});
export default DriverCard;
