import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { Room, RoomData, RoomVars } from '../types';

import { useNavigation } from '@react-navigation/native';

import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';

import CommonStyle from '../styles/commonStyle';
import colors from '../styles/colors';

import UserIcon from '../icons/UserIcon';

export default function RoomListItem({ id, name }: Room): JSX.Element {
  const navigation = useNavigation();

  const { loading, data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id }
	});

  if (loading) {
    return <View />
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => { navigation.navigate('Room', { id, name }) }}
    >
      <View style={styles.userIcon}>
        <UserIcon />
      </View>
			<Text
        style={styles.roomName}
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
    </TouchableOpacity>
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
  userIcon: {
    position: 'absolute',
    left: 15,
    top: 14,
    width: 64,
    height: 64
  },
  roomName: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins_500Medium'
  }
});