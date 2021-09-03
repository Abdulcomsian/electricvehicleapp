import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {TextFamily, Images} from '@constants';
import getShadow from '@lib/shadow';
//---------[SCREENS]-------------------
import LandingScreen from '@screens/landingScreen';
import RegisterScreen from '@screens/registerScreen';

enableScreens(true);
const {Screen, Navigator} = createStackNavigator();

const Stack = () => {
  return (
    <Navigator
      screenOptions={{
        headerMode: 'screen',
        // headerTintColor: 'white',
        // headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Screen
        name="landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Text style={styles.headerText}>REGISTER</Text>,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Image style={styles.backImage} source={Images.greenBack} />
          ),
          headerStyle: styles.headerStyle,
        }}
      />
    </Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    ...getShadow(0),
  },
  headerText: {fontFamily: TextFamily.HELVETICA, fontSize: 17},
  backImage: {
    width: 20,
    height: 20,
    marginLeft: 15,
    transform: [{rotate: '180deg'}],
  },
});
export default Stack;
