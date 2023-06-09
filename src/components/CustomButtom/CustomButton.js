import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
const CustomButton = ({ title, onPress, customStyle }) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.ButtonContainer, customStyle]}
        onPress={onPress}
      >
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: 'red',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
    color: '#fff',
  },
});
