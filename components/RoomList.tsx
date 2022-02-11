import React from 'react';
import { ActivityIndicator, FlatList, View, Text, StyleSheet } from 'react-native';

import { UsersRooms, Room } from '../types';

import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../graphql/queries';

import RoomListItem from './RoomListItem';

export default function RoomList(): JSX.Element {
  const { loading, data } = useQuery<UsersRooms>(GET_ROOMS);

  const renderItem = ({ item }: { item: Room }) => (
    <RoomListItem id={item.id} name={item.name} />
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