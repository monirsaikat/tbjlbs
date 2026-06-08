import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { GroupsStackParamList } from './groups.routes';

const Stack = createNativeStackNavigator<GroupsStackParamList>();

export const GroupsNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="GroupList" screenOptions={{ headerShown: false }}>
    {/* Screens attached here */}
  </Stack.Navigator>
);
