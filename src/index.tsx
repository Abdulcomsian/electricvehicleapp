import React, {Fragment} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {TourGuideProvider} from 'rn-tourguide';
import {Colors, TextFamily} from '@constants';
import {Buttons} from '@components';
import Navigator from './navigator';
const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <TourGuideProvider
        borderRadius={16}
        backdropColor={Colors.darkTransparent}
        tooltipStyle={tootTipStyles.tooltipStyle}
        tooltipComponent={({handleStop}) => (
          <Fragment>
            <View style={tootTipStyles.triangle} />
            <View style={tootTipStyles.tooltipStyleInner}>
              <Text style={tootTipStyles.wlcmeTxt}>Welcome!</Text>
              <Text style={tootTipStyles.smallTxt}>
                Are you interested in providing your charger for lease? Tap here
                anytime to add your charger.
              </Text>
              <Buttons.RoundedBtn
                onPress={() => handleStop && handleStop()}
                style={tootTipStyles.btn}>
                Got it
              </Buttons.RoundedBtn>
            </View>
          </Fragment>
        )}>
        <Navigator />
      </TourGuideProvider>
    </SafeAreaProvider>
  );
};
const tootTipStyles = StyleSheet.create({
  wlcmeTxt: {
    color: Colors.darkPurple,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: TextFamily.HELVETICA_BLACK,
  },
  smallTxt: {
    color: Colors.muted,
    fontSize: 16,
    fontFamily: TextFamily.HELVETICA,
  },
  tooltipStyle: {
    width: WP(100),
    height: 210,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  tooltipStyleInner: {
    backgroundColor: Colors.white,
    padding: 12,
    width: WP(100) - 35,
    height: 180,
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  btn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    height: 44,
    width: undefined,
  },
  triangle: {
    position: 'absolute',
    left: 40,
    top: 10,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderBottomColor: Colors.white,
  },
});
export default App;
