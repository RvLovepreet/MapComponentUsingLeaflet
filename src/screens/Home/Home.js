import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {
  CustomMapComponent,
  CustomInputText,
  CustomButton,
} from '../../components';
import { COMMON } from '../../theme';
const Home = ({ navigation, route }) => {
  const [searchOption, setsearchOption] = useState(false);
  const [address, setAddress] = useState('Himachal');
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
    searchOption: searchOption,
  });
  const setOption1 = () => {
    setsearchOption(true);
    setsearch(!search);
    setLocationInfo(pre => ({ ...pre, searchOption: true }));
  };
  const setOption2 = () => {
    setsearchOption(false);
    setsearch(!search);
    setLocationInfo(pre => ({ ...pre, searchOption: false }));
  };
  return (
    <View>
      <View style={[styles.SearchContainer, styles.searchOptionContainer]}>
        <CustomButton
          customStyle={styles.SearchOptionBtn}
          title="React Native"
          onPress={() => {
            setsearchOption(true);
            setsearch(!search);
            setLocationInfo(pre => ({ ...pre, searchOption: true }));
          }}
        />
        <CustomButton
          customStyle={styles.SearchOptionBtn}
          title="React"
          onPress={() => {
            setsearchOption(false);
            setsearch(!search);
            setLocationInfo(pre => ({ ...pre, searchOption: false }));
          }}
        />
      </View>
      {searchOption ? (
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
      ) : (
        <></>
      )}
      <CustomMapComponent
        width={'100%'}
        height={'100%'}
        locationInfo={locationInfo}
        address={address}
        setLocationInfo={setLocationInfo}
        inputValue={inputValue}
        search={search}
        searchOption={searchOption}
        setInputValue={setInputValue}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  searchOptionContainer: {
    padding: 0,
  },
  SearchOptionBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '50%',
  },
  SearchContainer: {
    padding: '1%',
    flexDirection: 'row',
    height: 40,
  },
});
