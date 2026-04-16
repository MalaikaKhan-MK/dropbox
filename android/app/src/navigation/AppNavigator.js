import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/auth/WelcomeScreen';
import SignInScreen from '../screens/auth/signin';
import SignUpScreen from '../screens/auth/signup';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Sign In' }}
        />

        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;