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
import NotificationCard from "../component/NotificationCard";
function NotificationScreen() {

  const notifications = [
    {
      id: 1,
      title: 'Accident',
      message: 'There is an accident in Ambo',
      time: '5 minutes ago',
    },
    {
      id: 2,
      title: 'Reminder',
      message: 'Don\'t forget ...',
      time: '2 hours ago',
    },
    {
      id: 3,
      title: 'Accident',
      message: 'There is an accident in Welega',
      time: '1 day ago',
    },
  ];
    return (
      <View>
      {notifications.map(notification => (
        <NotificationCard
          key={notification.id}
          title={notification.title}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </View>
    );
  }
  export default NotificationScreen;