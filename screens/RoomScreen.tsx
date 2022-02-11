import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';

import { RoomData, RoomVars } from '../types';

export default function RoomScreen({ route }): JSX.Element {
  const { loading, data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id: route.params.id}
	});

  const room = data!.room;

  return (
    <View>
      {room.messages && room.messages.map(message => <View key={message.id}>
        <Text>{message.body} said {message.user.firstName} {message.user.lastName}</Text>
        <br />	
      </View>
      )}
    </View>
  )
}