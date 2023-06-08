import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { COMMON } from '../../theme';
import CustomButton from '../CustomButtom/CustomButton';
const CustomMapComponent = ({
  width,
  height,
  locationInfo,
  address,
  setLocationInfo,
  inputValue = '',
  search,
  searchOption,
  setInputValue,
}) => {
  const webRef = useRef();

  function getInjectableJSMessage(message) {
    return `
      (function() {
        window.postMessage(${JSON.stringify(message)}
        )})
      ();
    `;
  }

  const sendData = addressInfo => {
    console.log(locationInfo, 'updated statement');
    console.log(addressInfo, 'updated statement  in object');
    webRef.current?.injectJavaScript(
      getInjectableJSMessage({
        addressInfo,
      }),
    );
    console.log('data sended : dsfa ok k k');
  };

  useEffect(() => {
    if (inputValue || searchOption) {
      searchLocation();
    }
  }, [search]);
  const searchLocation = () => {
    console.log(locationInfo, 'location data', inputValue);
    const obj = { ...locationInfo, address: inputValue };
    setLocationInfo(pre => ({ ...pre, address: inputValue }));
    sendData(obj);
  };

  return (
    <View style={styles.mapContainer(width, height)}>
      {/* <CustomButton title="Search" onPress={() => searchLocation()} /> */}

      <WebView
        ref={webRef}
        source={{ uri: COMMON.webViewUrl.uri }}
        injectedJavaScript={`window.myValue = '${JSON.stringify(
          locationInfo,
        )}';`}
        onMessage={event => {
          console.log(event, 'data');
          setLocationInfo(pre => ({
            ...pre,
            address: event.nativeEvent.data,
          }));
          setInputValue(event.nativeEvent.data);
          console.log(locationInfo, 'loaction info');
        }}
      />
    </View>
  );
};
export default CustomMapComponent;
var styles = StyleSheet.create({
  mapContainer: (width, height) => ({
    width: width,
    height: height,
  }),
});
