import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { SettingsStackParamList } from './settings.routes';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="SettingsHome" screenOptions={{ headerShown: false }}>
    {/* Screens attached here */}
  </Stack.Navigator>
);
