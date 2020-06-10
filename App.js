/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { BleManager } from 'react-native-ble-plx'


const App: () => React$Node = () => {
  let manager = new BleManager();
  manager.onStateChange((state) => {
    console.log('state change', state);
  });
  manager.startDeviceScan(null, null, (error, device) => {
    if(error) {
      console.log('errorrr', error);
      return;
    }
    console.log('device', device.id, device.name, device.localName, device.manufacturerData);
  })
  return (
    <View style={{flex:1}}>
      <Text style={styles.title}>
        Heyazbr
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
