import React from 'react';
import {View, StyleSheet, Image, Text, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, Images, TextFamily} from '@constants';
import {Buttons} from '@components';

const LandingScreen = ({navigation}: {navigation: any}) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.screenContain, {paddingBottom: bottom}]}>
      <Image
        style={styles.bgLogoBanner}
        source={Images.backgroundLogo}
        resizeMode={'contain'}
      />
      <Image
        style={[styles.Logo, {top: top + 20}]}
        source={Images.mainLogo}
        resizeMode={'contain'}
      />
      <View style={styles.screenContainInner}>
        <View style={styles.textCont}>
          <Text style={styles.textA}>
            Your EV Charging <Text style={styles.textB}>Companion</Text>
          </Text>
        </View>
        <Buttons.RoundedBtn
          onPress={() => {
            navigation.navigate('register');
          }}>
          Create Account
        </Buttons.RoundedBtn>
      </View>
      <Text
        style={styles.loginText}
        onPress={() => {
          navigation.replace('login');
        }}>
        Have an account? <Text style={styles.loginTextGreen}>Log In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContain: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
  },
  screenContainInner: {flex: 1, justifyContent: 'center'},
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
    fontSize: Platform.OS === 'ios' ? 17 : 18,
    fontFamily: TextFamily.HELVETICA,
    textAlign: 'center',
    marginBottom: 15,
  },
  loginTextGreen: {color: Colors.green},
});

export default LandingScreen;
