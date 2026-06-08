import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { StoriesStackParamList } from './stories.routes';

const Stack = createNativeStackNavigator<StoriesStackParamList>();

export const StoriesNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="StoriesFeed" screenOptions={{ headerShown: false }}>
    {/* Screens attached here */}
  </Stack.Navigator>
);
