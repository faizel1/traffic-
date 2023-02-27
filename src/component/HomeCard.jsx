import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const HomeCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Your Dispatchment</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          top:30
        }}
      >
        <View>
          <Text style={{fontSize:16}} >21/1/2023</Text>
          <Text style={{fontSize:16}}>welega,wereda 1</Text>
          <Text style={{fontSize:16}}>kebele 15</Text>
        </View>
        <View>
          <Icon name="map-marker-radius-outline" size={50} color="#55F38E" />
          <Text>open map</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#191A30",
    width: "90%",
    height: 200,
    padding: 15,
    borderRadius: 15,
    alignSelf: "center",
    marginVertical:20,
  },
  cardTitle: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    fontSize:18
  },
});

export default HomeCard;
