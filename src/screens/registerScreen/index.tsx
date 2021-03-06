import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, TextFamily} from '@constants';
import {Buttons, Inputs} from '@components';
import hooks from '@hooks';
const RegisterScreen = ({navigation}: {navigation: any}) => {
  const {bottom} = useSafeAreaInsets();
  const [KBHeight] = hooks.useKeyboard();
  console.log('KBH', KBHeight);
  return (
    <View style={[styles.screenContain, {paddingBottom: bottom}]}>
      <View style={styles.screenContainInner}>
        <Progress.Bar
          height={3.5}
          progress={0.25}
          width={wp(100) - 50}
          color={Colors.green}
          unfilledColor={Colors.lightGrey2}
          borderWidth={0}
          useNativeDriver={true}
        />
        <View style={styles.HeaderSec}>
          <View style={styles.infoSect}>
            <Text style={styles.textA}>Create Account</Text>
          </View>
          <Text
            style={styles.LoginText}
            onPress={() => {
              navigation.replace('login');
            }}>
            Login
          </Text>
        </View>
        <Inputs.MaterialInputA
          placeholder={'Full Name'}
          style={styles.textInput}
        />
        <Inputs.MaterialInputA
          placeholder={'Email Address'}
          style={styles.textInput}
        />
        <Inputs.MaterialInputA
          secureTextEntry={true}
          placeholder={'Create Password'}
          style={styles.textInput}
        />
        <Inputs.MaterialInputA
          secureTextEntry={true}
          placeholder={'Re-enter Password'}
          style={styles.textInput}
        />
        <Text style={styles.loginText}>
          By signing up, you agree to the
          <Text style={styles.loginTextGreen}> Terms and Conditions </Text>
          guiding ePower family.
        </Text>
        <Buttons.RoundedBtn
          onPress={() => {
            navigation.navigate('emailVerify');
          }}>
          Create Account
        </Buttons.RoundedBtn>
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

  loginTextGreen: {color: Colors.green},
  infoSect: {
    height: 90,
    width: 180,
    marginBottom: 40,
  },
});

export default RegisterScreen;
