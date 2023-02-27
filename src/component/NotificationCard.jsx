import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

const NotificationCard = ({ title, message, time, onPress, onDismiss }) => {
  return (
    <Card elevation={2} style={styles.card}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {onDismiss && (
            <IconButton icon="close" size={20} onPress={onDismiss} />
          )}
        </View>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      {onPress && (
        <IconButton icon="arrow-right" size={20} onPress={onPress} />
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginVertical: 8,
    fontSize: 14,
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
});

export default NotificationCard;
