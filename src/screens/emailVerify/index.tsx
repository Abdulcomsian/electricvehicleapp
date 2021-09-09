import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, TextFamily} from '@constants';
import {Buttons, Inputs} from '@components';
import hooks from '@hooks';
const EmailVerificationScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {bottom} = useSafeAreaInsets();
  const [KBHeight] = hooks.useKeyboard();
  console.log('KBH', KBHeight);
  return (
    <View style={[styles.screenContain, {paddingBottom: bottom}]}>
      <View style={styles.screenContainInner}>
        <Progress.Bar
          height={3.5}
          progress={0.5}
          width={wp(100) - 50}
          color={Colors.green}
          unfilledColor={Colors.lightGrey2}
          borderWidth={0}
          useNativeDriver={true}
        />
        <View style={styles.HeaderSec}>
          <Text style={styles.textA}>Enter Verification Code</Text>
        </View>
        <View style={styles.HeaderSecA}>
          <Text style={styles.textC}>
            {`A 6-digit code has been sent to your\nemail address\n(${'example@email.com'})`}
          </Text>
        </View>
        <Inputs.MaterialInputA
          placeholder={'Enter Code'}
          style={styles.textInput}
        />
        <View style={styles.rowify}>
          <Text style={[styles.loginTextGreen, styles.loginTextMuted]}>
            0:30
          </Text>
          <Text style={styles.loginTextGreen}> Resend Code </Text>
        </View>
        <Buttons.RoundedBtn
          onPress={() => {
            navigation.navigate('moreRegDet');
          }}>
          Verify
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
  HeaderSecA: {
    marginTop: 35,
    justifyContent: 'center',
    width: 300,
    alignSelf: 'center',
    marginBottom: 60,
  },
  textC: {
    fontFamily: TextFamily.HELVETICA,
    fontSize: Platform.OS === 'ios' ? 16 : 17,
    textAlign: 'center',
    color: Colors.muted,
  },
  HeaderSec: {
    marginTop: 35,
    justifyContent: 'center',
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
    fontSize: 24,
    textAlign: 'center',
    fontFamily: TextFamily.HELVETICA_BLACK,
  },
  textB: {color: Colors.green},
  Logo: {height: 70, width: 70, alignSelf: 'center', position: 'absolute'},

  loginTextGreen: {
    color: Colors.green,
    fontSize: Platform.OS === 'ios' ? 16 : 17,
    fontFamily: TextFamily.HELVETICA,
  },
  loginTextMuted: {color: Colors.muted},
  infoSect: {
    height: 90,
    width: 180,
    marginBottom: 40,
  },
  rowify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
});

export default EmailVerificationScreen;
