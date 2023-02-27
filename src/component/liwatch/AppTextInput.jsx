import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

// import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import DefaultStyles from "../../config/style";

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <MatIcon
          style={styles.icon}
          name={icon}
          color={DefaultStyles.colors.medium}
          size={20}
        />
      )}

      <TextInput 
      placeholderTextColor={DefaultStyles.colors.medium}
      style={DefaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: DefaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});
