import React, {useEffect, useRef} from 'react';
import {Easing, Animated, Platform} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {Images, Colors, TextFamily} from '@constants';
const DarkModeSwitch = ({
  onChange = () => {},
  size = 100,
  value = false,
  knobColor = 'orange',
  borderColor = 'orange',
  activeColor = 'white',
  inActiveColor = 'black',
  borderWidth = 2,
  animationSpeed = 'fast',
  elevation = 10,
}: {
  value?: boolean;
  onChange?: Function;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  knobColor?: string;
  animationSpeed?: string;
  elevation?: number;
  inActiveColor?: string;
  activeColor?: string;
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const SIZE = size;
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? SIZE * 0.9 : 0,
      duration:
        animationSpeed === 'fast'
          ? 100
          : animationSpeed === 'medium'
          ? 200
          : 500,
      useNativeDriver: false,
      easing: Easing.in,
    }).start();
  }, [value]);

  const backgroundColor = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [activeColor, inActiveColor],
  });

  const styles = {
    container: {
      width: SIZE * 1.1,
      backgroundColor,
      height: SIZE / 2,
      borderRadius: SIZE * 0.25,
      elevation: elevation ? elevation : null,
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: SIZE * 0.05,
      borderColor,
      borderWidth,
    },
    knob: {
      transform: [
        {
          translateX: translateX.interpolate({
            inputRange: [0, SIZE * 0.75],
            outputRange: [0, SIZE * 0.51],
          }),
        },
      ],
      width: SIZE * 0.36,
      height: SIZE * 0.36,
      backgroundColor: knobColor,
      borderRadius: SIZE * 0.18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icons: {
      width: 15,
      height: 15,
      resizeMode: 'center',
      borderRadius: 15 / 2,
    },
    text: {
      position: 'absolute',
      color: Colors.muted,
      left: value ? 6 : 30,
      fontSize: Platform.OS === 'android' ? 13 : 12,
      fontFamily: TextFamily.HELVETICA,
    },
  };
  return (
    <TapGestureHandler onHandlerStateChange={onChange}>
      <Animated.View style={styles.container}>
        {/* <Animated.View style={styles.moonLayer} /> */}
        <Animated.Text style={styles.text}>
          {value ? 'DARK' : 'LIGHT'}
        </Animated.Text>
        <Animated.View style={styles.knob}>
          <Animated.Image
            source={value ? Images.moon : Images.sun}
            style={styles.icons}
          />
        </Animated.View>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default DarkModeSwitch;
