import { Platform } from 'react-native';

type Shadow = {
  shadowColor:   string;
  shadowOffset:  { width: number; height: number };
  shadowOpacity: number;
  shadowRadius:  number;
  elevation:     number; // Android only
};

const makeShadow = (elevation: number): Shadow => ({
  shadowColor:   '#000',
  shadowOffset:  { width: 0, height: elevation * 0.5 },
  shadowOpacity: Platform.OS === 'ios' ? 0.08 + elevation * 0.02 : 1,
  shadowRadius:  elevation * 1.5,
  elevation,
});

export const shadows = {
  none: makeShadow(0),
  xs:   makeShadow(1),
  sm:   makeShadow(2),
  base: makeShadow(4),
  md:   makeShadow(8),
  lg:   makeShadow(12),
  xl:   makeShadow(16),
} as const;

export type ShadowLevel = keyof typeof shadows;
