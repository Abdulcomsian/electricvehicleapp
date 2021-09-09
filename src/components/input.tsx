import React, {useState, useRef} from 'react';
import {InputOutline, InputOutlineProps} from 'react-native-input-outline';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Images} from '@constants';
const MaterialInputA = ({
  placeholder = '',
  onFocus = () => {},
  onBlur = () => {},
  activeColor = Colors.green,
  inactiveColor = Colors.muted,
  keyboardType = 'default',
  placeholderTextColor = Colors.muted,
  style = {},
  roundness = 8,
  secureTextEntry = false,
  error = undefined,
}: InputOutlineProps) => {
  //const [active, setActive] = useState<boolean>(false);
  const [secure, setSecure] = useState<boolean>(secureTextEntry);
  const inputRef = useRef<InputOutline>(null);
  console.log('isActive', inputRef.current?.isFocused);

  return (
    <InputOutline
      ref={inputRef}
      secureTextEntry={secure}
      trailingIcon={() =>
        secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            activeOpacity={0.85}>
            <Image
              source={secure ? Images.eye : Images.aeye}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : null
      }
      style={[styles.input, style]} //{borderWidth: active ? 1 : 0}
      onFocus={e => {
        inputRef.current?.focus();
        console.log(placeholder, 'isActive');
        onFocus(e);
        //setActive(true);
      }}
      onBlur={e => {
        inputRef.current?.blur();
        console.log(placeholder, 'blured');
        onBlur(e);
        //setActive(false);
      }}
      error={error}
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
  icon: {width: 24, height: 24, resizeMode: 'contain'},
});
export default {MaterialInputA};
