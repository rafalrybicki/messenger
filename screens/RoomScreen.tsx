import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';
import { SEND_MESSAGE } from '../graphql/mutations';

import { RoomData, RoomVars } from '../types';
import Message from '../components/Message';

export default function RoomScreen({ route }): JSX.Element {
  const id = route.params.id;
  const { data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id},
    pollInterval: 500,
	});

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const messages = [...data!.room.messages!].reverse();
  const userId = data?.room.user!.id

  return (
    <View style={styles.container}>
      {messages && messages.map(message =>
        // <View key={message.id}>
        //   <Text
        //     onPress={() => sendMessage({ variables: {body: 'test4', roomId: id} }) }
        //   >{message.body} said {message.user.firstName} {message.user.lastName}</Text>
        // </View>
        <Message
          key={message.id}
          body={message.body}
          messageType={userId === message.user.id ? 'sent' : 'received'}
        />
      )}
      {/* input here */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 36,
    marginBottom: 16
  }
});