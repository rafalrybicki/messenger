import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';

import Theme from "./styles/theme";
import CommonStyle from "./styles/commonStyle"; 

import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import RoomScreen from "./screens/RoomScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: CommonStyle.HeaderStyle,
            headerTintColor: '#5603ad',
            headerTitleStyle: CommonStyle.HeaderTitleStyle,
          }}
        >
          <Stack.Screen name="Rooms" component={HomeScreen} />
          <Stack.Screen name="Room" component={RoomScreen} options={{ title: 'The Widlarz Group' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}