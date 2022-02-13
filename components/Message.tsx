import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MessageProps } from '../types';

import colors from '../styles/colors';
import CommonStyle from '../styles/commonStyle';

export default function Message({ body, messageType }: MessageProps): JSX.Element {
  const textStyles = [CommonStyle.BodyText];
  
  if (messageType === 'sent') {
    textStyles.push(CommonStyle.TextColorWhite);
  }

  return (
    <View style={[styles.message, styles[messageType]]}>
      <Text
        style={textStyles}
      >{body}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  message: {
    width: 245,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12
  },
  sent: {
    backgroundColor: colors.plum300,
    marginRight: 24,
    marginLeft: 'auto',
    borderBottomRightRadius: 0
  },
  received: {
    backgroundColor: colors.white,
    marginLeft: 24,
    borderBottomLeftRadius: 0
  }
});