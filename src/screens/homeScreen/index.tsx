import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors, Images, TextFamily} from '@constants';
import {Buttons, Inputs, Stars} from '@components';
import hooks from '@hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
const HomeScreen = ({navigation}: {navigation: any}) => {
  const {top, bottom} = useSafeAreaInsets();
  const [KBHeight] = hooks.useKeyboard();
  console.log('KBH', KBHeight);
  return (
    <ScrollView style={[styles.screenContain, {paddingBottom: bottom}]}>
      <View style={styles.screenContainInner}>
        <TouchableOpacity style={styles.myChargerBtnView} activeOpacity={0.85}>
          <View style={styles.rowify}>
            <Image source={Images.bCharger} style={styles.greenArrow} />
            <Text style={styles.myChargerBtnText}>My Charger</Text>
          </View>
          <Image source={Images.greenBack} style={styles.greenArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.myChargerBtnView1} activeOpacity={0.85}>
          <Text style={styles.myChargerBtnText1}>
            Request for mobile charger
          </Text>
        </TouchableOpacity>
        <Title>My Activity</Title>
        <ImageBackground source={Images.logoBanner} style={styles.logoBaner}>
          <Text style={styles.bannerUText}>No Activity yet</Text>
          <Text style={styles.bannerDText}>
            Your current activity will appear here
          </Text>
          <Buttons.RoundedBtn
            onPress={() => {}}
            style={styles.findChargerBtn}
            textStyle={{fontFamily: TextFamily.HELVETICA}}>
            Find Charger
          </Buttons.RoundedBtn>
        </ImageBackground>
        <Title>Chargers Nearby</Title>
      </View>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 10}}>
        {[1, 2, 3, 4, 5].map((item, indx) => (
          <TouchableOpacity
            activeOpacity={0.85}
            key={'_' + indx}
            style={styles.card}>
            <Image
              source={require('../../assets/images/random1.png')}
              style={styles.avatarCont}
            />
            <View style={styles.detailContain}>
              <Text style={styles.cardTitle} numberOfLines={1}>
                McAfee Chargers
              </Text>
              <Text style={styles.cardSubTitle} numberOfLines={1}>
                02A Portland road, Texas, USA
              </Text>
              <View style={styles.cardBottom}>
                <Stars rate={3.5} />
                <View style={[styles.rowify, styles.alignCenter]}>
                  <Image source={Images.location} style={styles.smallIcon} />
                  <Text style={styles.smallText}>27.4 MI</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};
const Title = ({children}: {children: string}) => (
  <Text style={styles.title}>{children}</Text>
);
const styles = StyleSheet.create({
  smallIcon: {width: 14, height: 14, resizeMode: 'contain'},
  smallText: {fontSize: 9, marginLeft: 4, fontFamily: TextFamily.HELVETICA},
  cardTitle: {
    fontSize: 16,
    color: Colors.darkPurple,
    marginBottom: 4,
    fontFamily: TextFamily.HELVETICA,
  },
  cardSubTitle: {
    fontSize: 14,
    color: Colors.muted,
    marginBottom: 4,
    fontFamily: TextFamily.HELVETICA,
  },
  card: {
    width: 225,
    height: 170,
    marginHorizontal: 10,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.muted,
  },
  avatarCont: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 78,
    width: '100%',
  },
  detailContain: {
    height: 164 - 78,
    width: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 12,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  rowify: {flexDirection: 'row'},
  alignCenter: {alignItems: 'center'},
  spaceBetween: {justifyContent: 'space-between'},
  findChargerBtn: {width: 130, height: 32, borderRadius: 8},
  bannerUText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: TextFamily.HELVETICA,
  },
  bannerDText: {
    marginTop: 10,
    marginBottom: 16,
    color: Colors.muted,
    fontSize: 10,
    fontFamily: TextFamily.HELVETICA,
  },
  title: {
    fontSize: 16,
    fontFamily: TextFamily.HELVETICA_BLACK,
    marginBottom: 13,
  },
  logoBaner: {
    borderRadius: 12,
    backgroundColor: Colors.darkPurple,
    height: 160,
    width: '100%',
    marginBottom: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContain: {
    flex: 1,
    backgroundColor: Colors.white,
    //
  },
  greenArrow: {width: 20, height: 20, resizeMode: 'contain'},
  myChargerBtnText: {
    marginLeft: 15,
    fontSize: 16,
    color: Colors.darkPurple,
    fontFamily: TextFamily.HELVETICA,
  },
  myChargerBtnView: {
    marginVertical: 16,
    borderRadius: 12,
    paddingHorizontal: 25,
    height: 70,
    width: '100%',
    borderColor: Colors.muted,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myChargerBtnText1: {
    marginLeft: 15,
    fontSize: 16,
    color: Colors.green,
    fontFamily: TextFamily.HELVETICA,
  },
  myChargerBtnView1: {
    marginBottom: 25,
    borderRadius: 12,
    paddingHorizontal: 25,
    height: 48,
    width: '100%',
    borderColor: Colors.muted,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {marginVertical: 16, height: 48},
  screenContainInner: {paddingHorizontal: 20, width: '100%'},
});

export default HomeScreen;
