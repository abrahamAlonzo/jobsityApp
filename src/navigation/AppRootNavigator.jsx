import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, MovieDetailScreen} from '../screens';
import {NON_AUTH_ROUTES} from './constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
        component={HomeScreen}
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
