import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CustomButton } from '../../components';
const FirstScreen = ({ navigation }) => {
  return (
    <View>
      <CustomButton
        title="React Native"
        onPress={() => navigation.navigate('Home', { searchNative: true })}
      />
      <CustomButton
        title="React"
        onPress={() => navigation.navigate('Home', { searchNative: false })}
      />
    </View>
  );
};
export default FirstScreen;
