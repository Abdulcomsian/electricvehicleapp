import React, {useState} from 'react';
import {InputOutline, InputOutlineProps} from 'react-native-input-outline';
import {StyleSheet} from 'react-native';
import {Colors} from '@constants';
const MaterialInputA = ({
  placeholder = '',
  onFocus = () => {},
  onBlur = () => {},
  activeColor = Colors.green,
  inactiveColor = Colors.lightGrey2,
  keyboardType = 'default',
  placeholderTextColor = Colors.lightGrey2,
  style = {},
  roundness = 8,
}: InputOutlineProps) => {
  const [active, setActive] = useState<boolean>(false);
  console.log(active + '');
  return (
    <InputOutline
      style={[styles.input, {borderWidth: active ? 1 : 0}, style]}
      onFocus={e => {
        onFocus(e);
        setActive(true);
      }}
      onBlur={e => {
        onBlur(e);
        setActive(false);
      }}
      placeholder={placeholder}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      roundness={roundness}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: Colors.lightGrey1,
  },
});
export default {MaterialInputA};
