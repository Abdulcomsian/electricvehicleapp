import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Platform,
  Text,
  TextStyle,
} from 'react-native';
import {Colors, TextFamily} from '@constants';
const RoundedBtn = ({
  children,
  onPress,
  disabled = false,
  style = {},
  textStyle = {},
}: {
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 2,
    backgroundColor: Colors.green,
    height: 48,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: TextFamily.HELVETICA_BLACK,
    color: Colors.white,
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 16 : 17,
  },
});

export default {RoundedBtn};
