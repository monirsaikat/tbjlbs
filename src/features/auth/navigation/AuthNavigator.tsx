import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList }     from './auth.routes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
  >
    {/*
      Screen components are intentionally omitted.
      Add them as:
        import { WelcomeScreen } from '../presentation/screens/WelcomeScreen';
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
    */}
  </Stack.Navigator>
);
