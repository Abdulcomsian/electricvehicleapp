import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, TextFamily} from '@constants';
import {Buttons, Inputs} from '@components';
import hooks from '@hooks';
const LoginScreen = ({navigation}: {navigation: any}) => {
  const {top, bottom} = useSafeAreaInsets();
  const [KBHeight] = hooks.useKeyboard();
  console.log('KBH', KBHeight);
  return (
    <View style={[styles.screenContain, {paddingBottom: bottom}]}>
      <View style={styles.screenContainInner}>
        <View style={styles.HeaderSec}>
          <View style={styles.infoSect}>
            <Text style={styles.textA}>Welcome Back</Text>
          </View>
          <Text
            style={styles.LoginText}
            onPress={() => {
              navigation.replace('register');
            }}>
            Register
          </Text>
        </View>
        <Inputs.MaterialInputA
          placeholder={'Email Address'}
          style={styles.textInput}
        />
        <Inputs.MaterialInputA
          secureTextEntry={true}
          placeholder={'Password'}
          style={styles.textInput}
        />
        <Text style={styles.loginTextGreen}> Forgot Password? </Text>
        <Buttons.RoundedBtn onPress={() => {}}>Log In</Buttons.RoundedBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContain: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
  },
  LoginText: {
    color: Colors.green,
    fontSize: Platform.OS === 'ios' ? 16 : 17,
    fontFamily: TextFamily.HELVETICA,
  },
  loginText: {
    fontSize: Platform.OS === 'ios' ? 12 : 13,
    fontFamily: TextFamily.HELVETICA,
    marginBottom: 46,
    lineHeight: 18,
    marginRight: 50,
  },

  HeaderSec: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {marginVertical: 16, height: 48},
  screenContainInner: {flex: 1, paddingBottom: 80},
  bgLogoBanner: {
    position: 'absolute',
    width: wp(120),
    height: wp(120),
    zIndex: -1,
    top: -wp(18),
    left: -wp(15),
  },
  textCont: {
    width: 240,
    height: 130,
    marginBottom: 30,
  },
  textA: {
    fontSize: 34,
    textAlign: 'left',
    fontFamily: TextFamily.HELVETICA_BLACK,
  },
  textB: {color: Colors.green},
  Logo: {height: 70, width: 70, alignSelf: 'center', position: 'absolute'},
  loginTextGreen: {color: Colors.green, marginBottom: 56, textAlign: 'right'},
  infoSect: {
    height: 90,
    width: 180,
    marginBottom: 40,
  },
});

export default LoginScreen;
