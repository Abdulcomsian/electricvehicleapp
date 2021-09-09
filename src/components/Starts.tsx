/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, ViewStyle} from 'react-native';
import {Images} from '@constants';

const STARS = ({
  rate,
  spacing = 2,
  size = 12,
  style = {},
}: {
  rate: number;
  spacing?: number;
  size?: number;
  style?: ViewStyle;
}) => {
  let thisRate = rate;
  if (rate > 5) {
    thisRate = 5;
  } else if (rate > 5) {
    thisRate = 0;
  }

  return (
    <View style={[style, styles.StarsCont]}>
      {[1, 2, 3, 4, 5].map(it => (
        <Image
          key={'_Star' + it}
          source={
            thisRate >= it
              ? Images.starFull
              : it - 0.5 <= thisRate
              ? Images.starHalf
              : Images.starEmpty
          }
          style={{
            height: size,
            width: size,
            marginLeft: it !== 0 ? spacing : 0,
            marginRight: it !== 4 ? spacing : 0,
          }}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  StarsCont: {flexDirection: 'row', alignItems: 'center'},
});
export default STARS;
