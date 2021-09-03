import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './stackNavigation';
const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};
export default Navigator;
