import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Room, RoomData, RoomVars } from '../types';

import { useNavigation } from '@react-navigation/native';

import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';

import CommonStyle from '../styles/commonStyle';
import colors from '../styles/colors';

export default function RoomListItem({ id, name }: Room): JSX.Element {
  const navigation = useNavigation();

  const { loading, data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id }
	});

  if (loading) {
    return <View />
  }

  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#E9EAEE"/>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <circle cx="32" cy="32" r="32" fill="#E9EAEE"/>
          </mask>
          <g mask="url(#mask0)">
          <path d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z" fill="#BFC1CC"/>
          <path d="M32 32C51.33 32 67 47.67 67 67C67 86.33 51.33 102 32 102C12.67 102 -3 86.33 -3 67C-3 47.67 12.67 32 32 32Z" fill="#BFC1CC"/>
          </g>
        </svg>
      </View>
			<Text
        style={[CommonStyle.Heading3, styles.roomName]}
        onPress={() => { navigation.navigate('Room', { id, name }) }}
        ellipsizeMode='tail'
        numberOfLines={1}
      >
        {name}
      </Text>
			<Text
        style={CommonStyle.BodyText}
        ellipsizeMode='tail'
        numberOfLines={1}
      >{data?.room.messages![0].body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 12,
    minHeight: 89,
    borderRadius: 12,
    paddingLeft: 96,
    paddingRight: 37
  },
  svg: {
    position: 'absolute',
    left: 15,
    top: 14,
    width: 64,
    height: 64
  },
  roomName: {
    marginBottom: 5
  }
});