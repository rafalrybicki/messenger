import React from 'react';
import { ActivityIndicator, View, FlatList, StyleSheet } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../graphql/queries';

import { UsersRooms, Room } from '../types';

import RoomListItem from '../components/RoomListItem';

export default function HomeScreen(): JSX.Element {
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