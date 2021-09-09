import React, {Fragment, useEffect, useState} from 'react';
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
import {TourGuideZoneByPosition, useTourGuideController} from 'rn-tourguide';
import {Colors, Images, TextFamily} from '@constants';
import {Buttons, Inputs, Stars} from '@components';
import hooks from '@hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
const HomeScreen = ({navigation}: {navigation: any}) => {
  const {canStart, start} = useTourGuideController();
  const {top, bottom} = useSafeAreaInsets();
  const [KBHeight] = hooks.useKeyboard();
  const [activity, setActivity] = useState(2);
  console.log('KBH', KBHeight);
  // useEffect(() => {
  //   if (canStart) {
  //     setTimeout(() => {
  //       start();
  //     }, 1000);
  //   }
  // }, [canStart]);
  return (
    <Fragment>
      <TourGuideZoneByPosition
        zone={1}
        shape={'rectangle'}
        isTourGuide
        top={10}
        left={30}
        width={wp(100) - 60}
        height={82}
      />
      <ScrollView style={[styles.screenContain, {paddingBottom: bottom}]}>
        <View style={styles.screenContainInner}>
          <TouchableOpacity
            style={styles.myChargerBtnView}
            activeOpacity={0.85}>
            <View style={styles.rowify}>
              <Image source={Images.bCharger} style={styles.greenArrow} />
              <Text style={styles.myChargerBtnText}>My Charger</Text>
            </View>
            <View style={[styles.rowify, styles.alignCenter]}>
              <Text style={[styles.myChargerBtnText, {color: Colors.muted}]}>
                (1)
              </Text>
              <Image source={Images.greenBack} style={styles.greenArrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myChargerBtnView1}
            activeOpacity={0.85}>
            <Text style={styles.myChargerBtnText1}>
              Request for mobile charger
            </Text>
          </TouchableOpacity>
          <Title>My Activity</Title>
          <ImageBackground source={Images.logoBanner} style={styles.logoBaner}>
            {activity === 1 ? (
              <View
                style={[
                  styles.rowify,
                  {width: '100%', height: '100%', padding: 15},
                ]}>
                <View style={styles.thunderC}>
                  <Image source={Images.thunder} style={styles.thunder} />
                </View>
                <View>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: TextFamily.HELVETICA,
                      fontSize: 16,
                      color: Colors.white,
                      marginBottom: 15,
                    }}>
                    MainLand Charger
                  </Text>
                  <View style={styles.rowify}>
                    <Image
                      source={Images.locationGrey}
                      style={styles.iconStyle}
                    />
                    <Text
                      numberOfLines={1}
                      style={{
                        fontFamily: TextFamily.HELVETICA,
                        fontSize: 12,
                        color: Colors.muted,
                      }}>
                      02A Portland road, New York..
                    </Text>
                  </View>
                  <View style={[{marginTop: 9}, styles.rowify]}>
                    <Image source={Images.carGrey} style={styles.iconStyle} />
                    <Text
                      numberOfLines={1}
                      style={{
                        fontFamily: TextFamily.HELVETICA,
                        fontSize: 12,
                        color: Colors.muted,
                      }}>
                      Tesla EV
                    </Text>
                  </View>
                  <Text
                    style={{
                      width: 105,
                      fontFamily: TextFamily.HELVETICA,
                      fontSize: 14,
                      color: Colors.muted,
                      marginTop: 13,
                    }}>
                    25/07. 9PM - 26/07. 12PM
                  </Text>
                </View>
                <Buttons.RoundedBtn
                  icon={Images.directionWhite}
                  onPress={() => {}}
                  style={{
                    position: 'absolute',
                    width: undefined,
                    paddingHorizontal: 15,
                    bottom: 10,
                    right: 10,
                    height: 40,
                  }}>
                  Check-In
                </Buttons.RoundedBtn>
              </View>
            ) : activity === 2 ? (
              <Fragment>
                <Text style={styles.bannerUText}>Mobile Charger Requested</Text>
                <Text
                  style={[
                    styles.bannerDText,
                    {width: 200, textAlign: 'center'},
                  ]}>
                  The mobile charger is on it's way, you will be notified when
                  it arrives
                </Text>
                <View style={styles.rowify}>
                  <Buttons.RoundedBtn
                    onPress={() => {}}
                    style={[
                      styles.findChargerBtn,
                      {
                        paddingHorizontal: 15,
                        width: undefined,
                        marginRight: 10,
                        backgroundColor: Colors.darkGreen,
                      },
                    ]}
                    textStyle={{fontFamily: TextFamily.HELVETICA}}>
                    Cancel
                  </Buttons.RoundedBtn>
                  <Buttons.RoundedBtn
                    onPress={() => {}}
                    style={[
                      styles.findChargerBtn,
                      {paddingHorizontal: 15, width: undefined},
                    ]}
                    textStyle={{fontFamily: TextFamily.HELVETICA}}>
                    Call Driver
                  </Buttons.RoundedBtn>
                </View>
              </Fragment>
            ) : (
              <Fragment>
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
              </Fragment>
            )}
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
    </Fragment>
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
  iconStyle: {width: 15, height: 15, resizeMode: 'contain', marginRight: 10},
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
  thunderC: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.darkGreen,
    alignItems: 'center',
    marginRight: 10,
  },
  thunder: {width: 30, height: 30, resizeMode: 'contain'},
  textInput: {marginVertical: 16, height: 48},
  screenContainInner: {paddingHorizontal: 20, width: '100%'},
});

export default HomeScreen;
