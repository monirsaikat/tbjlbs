import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { QueryProvider } from './QueryProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <GestureHandlerRootView style={styles.flex}>
    <SafeAreaProvider>
      <QueryProvider>{children}</QueryProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
