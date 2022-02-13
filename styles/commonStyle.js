import { StyleSheet } from 'react-native';

import colors from './colors';

const CommonStyle = StyleSheet.create({
  BodyText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: colors.black
  },
  TextColorWhite: {
    color: colors.white
  },
  HeaderStyle: {
    backgroundColor: colors.blue300,
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px',
  },
  HeaderTitleStyle: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: 'Poppins_700Bold',
    color: colors.plum500
  }
});

export default CommonStyle;