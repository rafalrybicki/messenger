import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TWGIcon from '../icons/TWGIcon';
import colors from '../styles/colors';
import CommonStyle from '../styles/commonStyle';

export default function RoomTitle(): JSX.Element {
  return (
    <View style={styles.container}>
      <TWGIcon / >
      <Text style={styles.name}>The Widlarz Group</Text>
      <Text style={[CommonStyle.BodyText, CommonStyle.TextColorWhite]}>Active now???</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 35
  },
  name: {
    color: colors.plum500,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
    marginTop: 3
  }
});