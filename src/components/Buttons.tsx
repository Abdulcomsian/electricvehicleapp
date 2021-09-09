import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Platform,
  Text,
  TextStyle,
  Image,
} from 'react-native';
import {Colors, TextFamily} from '@constants';
const RoundedBtn = ({
  icon = undefined,
  children,
  onPress,
  disabled = false,
  style = {},
  textStyle = {},
}: {
  icon?: any;
  children: string;
  onPress: Function;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      disabled={disabled}
      activeOpacity={0.85}
      onPress={() => onPress()}>
      <Text style={[styles.btnText, textStyle]}>{children}</Text>
      {icon !== undefined && <Image source={icon} style={styles.iconStyle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconStyle: {width: 18, height: 18, marginLeft: 12},
  btn: {
    marginTop: 2,
    backgroundColor: Colors.green,
    height: 48,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    fontFamily: TextFamily.HELVETICA_BLACK,
    color: Colors.white,
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 16 : 17,
  },
});

export default {RoundedBtn};
