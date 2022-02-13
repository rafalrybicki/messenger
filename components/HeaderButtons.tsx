import React from 'react';
import { View, TouchableOpacity , StyleSheet } from 'react-native';

import { HeaderButtonsProps } from '../types';

export default function HeaderButtons({ iconOne, iconTwo }: HeaderButtonsProps): JSX.Element {
  const handleOnPress = () => alert('Pressed!');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.svg} onPress={handleOnPress}>
        {iconOne}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOnPress}>
        {iconTwo}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 16,
    paddingTop: 3
  },
  svg: {
    paddingRight: 8
  }
});