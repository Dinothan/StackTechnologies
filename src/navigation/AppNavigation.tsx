import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import {useAppSelector} from '../hooks/hooks';
import HomeScreen from '../screens/Home';
import ViewProductScreen from '../screens/ViewProduct';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const isAuthenticatedUser = useAppSelector(
    state => state.auth.isAuthenticated,
  );

  const username = useAppSelector(state => state.auth.username);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      {isAuthenticatedUser && (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Hi! ' + username, headerLeft: () => null}}
          />
          <Stack.Screen
            name="ViewProduct"
            component={ViewProductScreen}
            options={{title: '', headerBackTitle: ''}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
