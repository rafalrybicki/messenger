import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoomsScreen from "./screens/RoomsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Rooms" component={RoomsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}