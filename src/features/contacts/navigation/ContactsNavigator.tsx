import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ContactsStackParamList } from './contacts.routes';

const Stack = createNativeStackNavigator<ContactsStackParamList>();

export const ContactsNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="ContactList" screenOptions={{ headerShown: false }}>
    {/* Screens attached here */}
  </Stack.Navigator>
);
