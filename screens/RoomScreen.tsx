import React from 'react';
import { KeyboardAvoidingView, FlatList, StyleSheet } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../graphql/queries';

import {Message as MessageType, RoomData, RoomVars } from '../types';

import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

export default function RoomScreen({ route }): JSX.Element {
  const id = route.params.id;
  const { data } = useQuery<RoomData, RoomVars>(GET_ROOM, {
		variables: { id },
    pollInterval: 500,
	});

  const messages = data?.room.messages;
  const userId = data?.room.user!.id;
  const roomId = data?.room.id!;

  const renderItem = ({ item }: { item: MessageType }) => (
    <Message
      body={item.body}
      messageType={userId === item.user.id ? 'sent' : 'received'}
    />
  );


  return (
    <KeyboardAvoidingView style={styles.container}>
      <FlatList
        inverted
        data={messages}
        renderItem={renderItem}
        keyExtractor={message => message.id}
      />
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