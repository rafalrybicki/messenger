import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import RoomScreen from "./screens/RoomScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#B6DEFD',
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
            },
            headerTintColor: '#5603AD',
            headerTitleStyle: {
              fontWeight: 700,
              fontSize: 28
            }
          }}
        >
          <Stack.Screen name="Rooms" component={HomeScreen} />
          <Stack.Screen name="Room" component={RoomScreen} options={{ title: 'The Widlarz Group' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}