import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabParamList } from '@shared/types/navigation.types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const ChatNavigator = React.lazy(() =>
  import('@chat/navigation').then((m) => ({ default: m.ChatNavigator })),
);
const ContactsNavigator = React.lazy(() =>
  import('@contacts/navigation').then((m) => ({ default: m.ContactsNavigator })),
);
const StoriesNavigator = React.lazy(() =>
  import('@stories/navigation').then((m) => ({ default: m.StoriesNavigator })),
);
const CallsNavigator = React.lazy(() =>
  import('@calls/navigation').then((m) => ({ default: m.CallsNavigator })),
);
const ProfileNavigator = React.lazy(() =>
  import('@profile/navigation').then((m) => ({ default: m.ProfileNavigator })),
);

export const MainNavigator: React.FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="ChatsTab"    component={ChatNavigator as React.ComponentType} />
    <Tab.Screen name="ContactsTab" component={ContactsNavigator as React.ComponentType} />
    <Tab.Screen name="StoriesTab"  component={StoriesNavigator as React.ComponentType} />
    <Tab.Screen name="CallsTab"    component={CallsNavigator as React.ComponentType} />
    <Tab.Screen name="ProfileTab"  component={ProfileNavigator as React.ComponentType} />
  </Tab.Navigator>
);
