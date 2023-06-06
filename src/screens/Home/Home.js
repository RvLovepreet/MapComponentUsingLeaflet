import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {
  CustomMapComponent,
  CustomInputText,
  CustomButton,
} from '../../components';
import { COMMON } from '../../theme';
const Home = () => {
  const [address, setAddress] = useState('India');
  const [inputValue, setInputValue] = useState('');
  const [search, setsearch] = useState(true);
  const [locationInfo, setLocationInfo] = useState({
    coOrdinates: COMMON.Constent.coOrdinates,
    iconUrl: COMMON.Constent.iconUrl,
    name: COMMON.Constent.name,
    description: COMMON.Constent.description,
    iconSize: COMMON.Constent.iconSize,
    iconAnchor: COMMON.Constent.iconAnchor,
    popupAnchor: COMMON.Constent.popupAnchor,
    address: address,
  });

  return (
    <View>
      <View style={styles.SearchContainer}>
        <CustomInputText onChange={txt => setInputValue(txt)} />
        <CustomButton
          onPress={() => {
            setsearch(!search);
            setLocationInfo(pre => ({ ...pre, address: inputValue }));
          }}
          title="Search"
        />
      </View>
      <CustomMapComponent
        width={'100%'}
        height={'100%'}
        locationInfo={locationInfo}
        address={address}
        setLocationInfo={setLocationInfo}
        inputValue={inputValue}
        search={search}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
    height: 40,
  },
});
