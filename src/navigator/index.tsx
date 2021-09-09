import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './stackNavigation';
const Navigator = () => {
  useEffect(() => {
    Platform.OS === 'android' &&
      (StatusBar.setTranslucent(true),
      StatusBar.setBackgroundColor('transparent', true));
    StatusBar.setBarStyle('dark-content');
  }, []);
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};
export default Navigator;
