import { StyleSheet } from 'react-native';

import colors from './colors';

const CommonStyle = StyleSheet.create({
  BodyText: {
    fontSize: 14,
  },
  Heading1: {
    fontSize: 36,
    fontWeight: 700,
  },
  Heading3: {
    fontSize: 15,
    fontWeight: 500,
  },
  HeaderStyle: {
    backgroundColor: colors.blue300,
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px',
  },
  HeaderTintColor: colors.plum500,
  HeaderTitleStyle: {
    fontSize: 36,
    fontWeight: 700,
  }
});

export default CommonStyle;