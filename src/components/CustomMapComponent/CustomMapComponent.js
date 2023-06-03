import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { COMMON } from '../../theme';
const CustomMapComponent = ({ width, height, locationInfo }) => {
  return (
    <View style={styles.mapContainer(width, height)}>
      <WebView
        source={{ uri: COMMON.webViewUrl.uri }}
        injectedJavaScript={`window.myValue = '${JSON.stringify(
          locationInfo,
        )}';`}
        onMessage={event => {}}
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
