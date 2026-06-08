import { Platform } from 'react-native';

const FONT_FAMILY = {
  regular:    Platform.select({ ios: 'System',    android: 'Roboto' })!,
  medium:     Platform.select({ ios: 'System',    android: 'Roboto-Medium' })!,
  semibold:   Platform.select({ ios: 'System',    android: 'Roboto-Medium' })!,
  bold:       Platform.select({ ios: 'System',    android: 'Roboto-Bold' })!,
  mono:       Platform.select({ ios: 'Courier',   android: 'monospace' })!,
} as const;

export const typography = {
  fontFamily: FONT_FAMILY,

  size: {
    xs:   11,
    sm:   13,
    base: 15,
    md:   17,
    lg:   20,
    xl:   24,
    '2xl':28,
    '3xl':34,
  },

  lineHeight: {
    tight:  1.2,
    normal: 1.5,
    loose:  1.75,
  },

  weight: {
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
  },

  letterSpacing: {
    tight:  -0.5,
    normal: 0,
    wide:   0.5,
  },
} as const;

export type FontSize   = keyof typeof typography.size;
export type FontWeight = keyof typeof typography.weight;
