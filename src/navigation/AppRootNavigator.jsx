import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, MovieDetailScreen} from '../screens';
import {NON_AUTH_ROUTES} from './constants';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NON_AUTH_ROUTES.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NON_AUTH_ROUTES.MOVIE_DESCRIPTION}
        component={MovieDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default function AppRootNavigator() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
