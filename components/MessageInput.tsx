import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { Message, MessageInputProps, NewMessage } from '../types';

import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../graphql/mutations';

import SendIcon from '../icons/SendIcon';
import colors from '../styles/colors';

export default function MessageInput({ roomId }: MessageInputProps): JSX.Element {
  const [messageBody, setMessageBody] = useState<string>('');
  const [sendMessage] = useMutation<Message, NewMessage>(SEND_MESSAGE, { variables: {body: messageBody, roomId }});

  const addMessage = () => {
    sendMessage();
    setMessageBody('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setMessageBody}
        value={messageBody}
      />
      <TouchableOpacity onPress={addMessage}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: colors.blue300,
    height: 102,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
    paddingRight: 20,
    paddingBottom: 0
  },
  textInput: {
    backgroundColor: colors.white,
    marginRight: 17,
    marginTop: 1,
    flexGrow: 1,
    height: 41,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14
  }
});