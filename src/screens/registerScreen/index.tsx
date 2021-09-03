import React from 'react';
import {View, StyleSheet, Image, Text, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, Images, TextFamily} from '@constants';
import {Buttons, Inputs} from '@components';

const RegisterScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.screenContain, {paddingBottom: bottom}]}>
      <View style={styles.screenContainInner}>
        <Inputs.MaterialInputA
          placeholder={'Full Name'}
          style={styles.textInput}
        />
        <Inputs.MaterialInputA
          placeholder={'Email Address'}
          style={styles.textInput}
        />
        <Inputs.MaterialInputA
          placeholder={'Create Password'}
          style={styles.textInput}
        />
        <Inputs.MaterialInputA
          placeholder={'Re-enter Password'}
          style={styles.textInput}
        />
        <Text style={styles.loginText}>
          By signing up, you agree to the
          <Text style={styles.loginTextGreen}> Terms and Conditions </Text>
          guiding epowerfamily.
        </Text>
        <Buttons.RoundedBtn onPress={() => {}}>
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
  loginText: {
    fontSize: Platform.OS === 'ios' ? 12 : 13,
    fontFamily: TextFamily.HELVETICA,
    marginBottom: 46,
    lineHeight: 18,
  },
  loginTextGreen: {color: Colors.green},
});

export default RegisterScreen;
