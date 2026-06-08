import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { CallsStackParamList } from './calls.routes';

const Stack = createNativeStackNavigator<CallsStackParamList>();

export const CallsNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="CallHistory" screenOptions={{ headerShown: false }}>
    {/* Screens attached here */}
  </Stack.Navigator>
);
