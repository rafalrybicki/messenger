import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Room, RoomData, RoomVars } from '../types';

import { useNavigation } from '@react-navigation/native';

import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';

export default function RoomListItem({ id, name }: Room): JSX.Element {
  const navigation = useNavigation();

  const { loading, data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id }
	});

  if (loading) {
    return <View />
  }

  return (
    <View>
			<Text onPress={() => { navigation.navigate('Room', { id, name }) }}
      >
        {name}
      </Text>
			<Text>{data?.room.messages![0].body}</Text>
			<br />
    </View>
  )
}