import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';

import { RoomData, RoomVars } from '../types';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

export default function RoomScreen({ route }): JSX.Element {
  const id = route.params.id;
  const { data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id },
    pollInterval: 500,
	});

  const messages = [...data!.room.messages!].reverse();
  const userId = data?.room.user!.id;
  const roomId = data?.room.id!;

  return (
    <KeyboardAvoidingView style={styles.container}>
      {messages && messages.map(message =>
        <Message
          key={message.id}
          body={message.body}
          messageType={userId === message.user.id ? 'sent' : 'received'}
        />
      )}
      <MessageInput roomId={roomId} />
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 36
  }
});