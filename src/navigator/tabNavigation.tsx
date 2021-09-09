import React, {Fragment, useState} from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//---------[SCREENS]-------------------
import HomeScreen from '@screens/homeScreen';
import {TextFamily, Colors, Images} from '@constants';
import {Switches} from '@components';
import getShadow from '@lib/shadow';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {Screen, Navigator} = createBottomTabNavigator();

const BottomTabs = () => {
  const {top} = useSafeAreaInsets();
  const [dd, ddd] = useState(false);
  const handleSwitch = () => {
    ddd(d => !d);
  };
  const navigation = useNavigation();
  return (
    <Navigator screenOptions={{tabBarShowLabel: false}}>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Image
              source={focused ? Images.activeHome : Images.inactiveHome}
              style={[styles.tabIcon, {width: size, height: size}]}
            />
          ),
          headerStyle: {...getShadow(0)},
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 32,
            fontFamily: TextFamily.HELVETICA_BLACK,
            textTransform: 'capitalize',
            color: Colors.darkPurple,
          },
          headerRightContainerStyle: styles.headerRightContainer,
          headerRight: () => (
            <Fragment>
              <TouchableOpacity
                style={styles.btn1}
                activeOpacity={0.85}
                onPress={() => navigation.navigate('notifications')}>
                <View style={styles.dot} />
                <Image source={Images.notification} style={styles.headerIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1} activeOpacity={0.85}>
                <Image source={Images.chat} style={styles.headerIcon} />
              </TouchableOpacity>
            </Fragment>
          ),
        }}
      />
      <Screen
        name="search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Image
              source={focused ? Images.activeSearch : Images.inactiveSearch}
              style={[styles.tabIcon, {width: size, height: size}]}
            />
          ),
          headerShown: false,
        }}
      />
      <Screen
        name="history"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Image
              source={focused ? Images.activeHistory : Images.inactiveHistory}
              style={[styles.tabIcon, {width: size, height: size}]}
            />
          ),
          headerStyle: {...getShadow(0)},
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 32,
            fontFamily: TextFamily.HELVETICA_BLACK,
            textTransform: 'capitalize',
            color: Colors.darkPurple,
          },
          headerRightContainerStyle: styles.headerRightContainer,
        }}
      />
      <Screen
        name="account"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Image
              source={focused ? Images.activeProfile : Images.inactiveProfile}
              style={[styles.tabIcon, {width: size, height: size}]}
            />
          ),
          headerStyle: {...getShadow(0), height: 65 + top},
          headerTitle: 'Profile',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 32,
            fontFamily: TextFamily.HELVETICA_BLACK,
            textTransform: 'capitalize',
            color: Colors.darkPurple,
            marginBottom: 15,
          },
          headerRightContainerStyle: styles.headerRightContainerProfile,
          headerRight: () => (
            <Fragment>
              <Text style={styles.themeText}>THEME</Text>
              <Switches.DarkModeSwitch
                size={64}
                value={dd}
                onChange={handleSwitch}
                knobColor={Colors.green}
                borderColor={Colors.muted}
                borderWidth={StyleSheet.hairlineWidth}
                animationSpeed={'fast'}
                elevation={4}
                inActiveColor={Colors.darkTheme}
                activeColor={Colors.white}
              />
            </Fragment>
          ),
        }}
      />
    </Navigator>
  );
};
const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.ORed,
    position: 'absolute',
    top: 2,
    left: 1,
    zIndex: 4,
  },
  themeText: {
    color: Colors.darkPurple,
    fontSize: Platform.OS === 'android' ? 13 : 12,
    fontFamily: TextFamily.HELVETICA,
    marginBottom: 3,
  },
  headerRightContainer: {
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerRightContainerProfile: {
    //marginTop: 15,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btn1: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.muted,
    marginHorizontal: 8,
  },
  headerIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  tabIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    ...getShadow(8),
  },
});
export default BottomTabs;
