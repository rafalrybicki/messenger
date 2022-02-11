import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Rooms" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}