import React from 'react';
import { View, Text } from 'react-native';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';
import { SEND_MESSAGE } from '../graphql/mutations';

import { RoomData, RoomVars } from '../types';

export default function RoomScreen({ route }): JSX.Element {
  const id = route.params.id;
  const { data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id},
    pollInterval: 500,
	});

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const room = data!.room;

  return (
    <View>
      {room.messages && room.messages.map(message =>
        <View key={message.id}>
          <Text
            onPress={() => sendMessage({ variables: {body: 'test4', roomId: id} }) }
          >{message.body} said {message.user.firstName} {message.user.lastName}</Text>
          <br />	
        </View>
      )}
    </View>
  )
}