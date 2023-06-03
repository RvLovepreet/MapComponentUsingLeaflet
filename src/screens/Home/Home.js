import React from 'react';
import { View } from 'react-native';
import { CustomMapComponent } from '../../components';
import { COMMON } from '../../theme';
const Home = () => {
  const locationInfo = {
    coOrdinates: COMMON.Constent.coOrdinates,
    iconUrl: COMMON.Constent.iconUrl,
    name: COMMON.Constent.name,
    description: COMMON.Constent.description,
    iconSize: COMMON.Constent.iconSize,
    iconAnchor: COMMON.Constent.iconAnchor,
    popupAnchor: COMMON.popupAnchor,
  };

  return (
    <View>
      <CustomMapComponent
        width={'100%'}
        height={'100%'}
        locationInfo={locationInfo}
      />
    </View>
  );
};
export default Home;
