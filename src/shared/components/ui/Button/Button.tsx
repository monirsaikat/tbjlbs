/**
 * Button — shared atomic UI component.
 *
 * This file is a placeholder that demonstrates the component folder convention.
 * Each shared component gets its own folder with:
 *   Button.tsx        — implementation
 *   Button.types.ts   — prop types
 *   index.ts          — re-export
 */
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

export interface ButtonProps {
  label:        string;
  onPress:      () => void;
  variant?:     'primary' | 'secondary' | 'ghost' | 'destructive';
  size?:        'sm' | 'base' | 'lg';
  isLoading?:   boolean;
  isDisabled?:  boolean;
  fullWidth?:   boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant    = 'primary',
  isLoading  = false,
  isDisabled = false,
}) => (
  <TouchableOpacity
    style={[styles.base, styles[variant], (isLoading || isDisabled) && styles.disabled]}
    onPress={onPress}
    disabled={isLoading || isDisabled}
    activeOpacity={0.7}
  >
    {isLoading
      ? <ActivityIndicator color="#fff" />
      : <Text style={styles.label}>{label}</Text>
    }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  base:        { borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center' },
  primary:     { backgroundColor: '#10b981' },
  secondary:   { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#10b981' },
  ghost:       { backgroundColor: 'transparent' },
  destructive: { backgroundColor: '#ef4444' },
  disabled:    { opacity: 0.5 },
  label:       { color: '#fff', fontSize: 15, fontWeight: '600' },
});
