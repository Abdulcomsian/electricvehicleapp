import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '@constants';
const NotificationScreen = ({navigation}: {navigation: any}) => {
  return <View style={Styles.screenCont} />;
};

const Styles = StyleSheet.create({
  screenCont: {flex: 1, backgroundColor: Colors.white},
});
export default NotificationScreen;
