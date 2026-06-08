import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenProps {
  children:      React.ReactNode;
  scrollable?:   boolean;
  padded?:       boolean;
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  scrollable = false,
  padded     = true,
}) => {
  const content = scrollable
    ? <ScrollView contentContainerStyle={padded && styles.padded}>{children}</ScrollView>
    : <View style={[styles.flex, padded && styles.padded]}>{children}</View>;

  return (
    <SafeAreaView style={styles.flex}>
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex:   { flex: 1, backgroundColor: '#fff' },
  padded: { padding: 16 },
});
