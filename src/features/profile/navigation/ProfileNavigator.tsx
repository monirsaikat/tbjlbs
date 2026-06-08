import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ProfileStackParamList } from './profile.routes';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="MyProfile" screenOptions={{ headerShown: false }}>
    {/* Screens attached here */}
  </Stack.Navigator>
);
