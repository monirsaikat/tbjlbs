import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ChatStackParamList }     from './chat.routes';

const Stack = createNativeStackNavigator<ChatStackParamList>();

export const ChatNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="ConversationList"
    screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
  >
    {/*
      Attach screen components here once built:
        <Stack.Screen name="ConversationList" component={ConversationListScreen} />
        <Stack.Screen name="Conversation"     component={ConversationScreen} />
    */}
  </Stack.Navigator>
);
