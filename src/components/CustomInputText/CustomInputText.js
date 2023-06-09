import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const CustomInputText = ({ value, onChange }) => {
  return (
    <>
      <TextInput style={styles.InputTextStyle} onChangeText={onChange} />
    </>
  );
};
export default CustomInputText;
const styles = StyleSheet.create({
  InputTextStyle: {
    borderWidth: 1,
    height: '100%',
    padding: 0,
    width: '60%',
  },
});
