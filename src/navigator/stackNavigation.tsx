import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {} from '@react-navigation/elements';
import LandingScreen from '@screens/landingScreen';
import {enableScreens} from 'react-native-screens';

enableScreens(true);
const {Screen, Navigator} = createStackNavigator();
const MyStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
export default MyStack;
