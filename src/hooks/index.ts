import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

const useKeyboard = (): [number] => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardDidShow = ({
    endCoordinates: {height},
  }: KeyboardEvent): void => {
    setKeyboardHeight(height);
  };
  const onKeyboardDidHide = (): void => {
    setKeyboardHeight(0);
  };

  useEffect(() => {
    const _keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const _keyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return (): void => {
      _keyboardDidShow.remove();
      _keyboardDidHide.remove();
    };
  }, []);

  return [keyboardHeight];
};

export default {useKeyboard};
