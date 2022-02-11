import React from 'react';
import { ActivityIndicator, FlatList, View, Text, StyleSheet } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../graphql/queries';

const Item = ({ name }) => (
  <View>
    <Text>{name}</Text>
  </View>
);

export default function RoomList() {
  const { loading, data } = useQuery(GET_ROOMS);

  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

  if(loading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <View>
      <FlatList
        data={data?.usersRooms.rooms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}