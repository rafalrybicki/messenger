import { ActivityIndicator} from 'react-native';

import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';
import Theme from "./styles/theme";
import CommonStyle from "./styles/commonStyle"; 

import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import HomeScreen from "./screens/HomeScreen";
import RoomScreen from "./screens/RoomScreen";
import HeaderButtons from "./components/HeaderButtons";
import RoomTitle from "./components/RoomTitle";
import SearchIcon from './icons/SearchIcon';
import UsersIcon from './icons/UsersIcon';
import CallIcon from "./icons/CallIcon";
import VideoCallIcon from "./icons/VideoCallIcon";
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: CommonStyle.HeaderStyle,
            headerTintColor: colors.plum500,
            headerTitleStyle: CommonStyle.HeaderTitleStyle,
          }}
        >
          <Stack.Screen
            name="Rooms"
            component={HomeScreen}
            options={{
              headerRight: () =>
                <HeaderButtons
                  iconOne={<SearchIcon />}
                  iconTwo={<UsersIcon />}
                />
            }}
          />
          <Stack.Screen
            name="Room"
            component={RoomScreen}
            options={{
              headerTitle: () => <RoomTitle />,
              headerRight: () => 
                <HeaderButtons
                  iconOne={<CallIcon />}
                  iconTwo={<VideoCallIcon />}
                />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}