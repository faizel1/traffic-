import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";

function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>My App</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <DrawerItem
            label="Home"
            icon={({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            label="Settings"
            icon={({ color, size }) => (
              <Icon name="settings" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('Settings')}
          />       
             <DrawerItem
          label="Profile"
          icon={({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('Profile')}
        />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerFooter}>
        <Text style={styles.drawerFooterText}>Version 1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  drawerHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  drawerContent: {
    marginTop: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbb',
  },
  drawerFooter: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#bbb',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  drawerFooterText: {
    color: '#666',
    fontSize: 12,
  },
});

export default CustomDrawerContent;
