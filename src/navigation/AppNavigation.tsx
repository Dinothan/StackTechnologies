import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import {useAppSelector} from '../hooks/hooks';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const isAuthenticatedUser = useAppSelector(
    state => state.auth.isAuthenticated,
  );

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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
