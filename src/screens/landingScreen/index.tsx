import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '@constants';
const landingScreen = () => {
  return <View style={styles.screenContain}></View>;
};
const styles = StyleSheet.create({
  screenContain: {flex: 1, backgroundColor: Colors.white},
});
export default landingScreen;
