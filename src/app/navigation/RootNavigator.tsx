import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '@shared/stores';
import type { RootStackParamList } from '@shared/types/navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Lazy-load navigator modules to enable true feature isolation
const AuthNavigator = React.lazy(() =>
  import('@auth/navigation').then((m) => ({ default: m.AuthNavigator })),
);
const MainNavigator = React.lazy(() =>
  import('./MainNavigator').then((m) => ({ default: m.MainNavigator })),
);

export const RootNavigator: React.FC = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isHydrated = useAuthStore((s) => s.isHydrated);

  if (!isHydrated) {
    return null; // Render SplashScreen here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainNavigator as React.ComponentType} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator as React.ComponentType} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
