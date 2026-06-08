/** Base-4 spacing scale (in dp). Use multiples of 4. */
export const spacing = {
  0:    0,
  0.5:  2,
  1:    4,
  1.5:  6,
  2:    8,
  2.5:  10,
  3:    12,
  4:    16,
  5:    20,
  6:    24,
  7:    28,
  8:    32,
  10:   40,
  12:   48,
  14:   56,
  16:   64,
  20:   80,
  24:   96,
} as const;

export const radius = {
  none:   0,
  sm:     4,
  base:   8,
  md:     12,
  lg:     16,
  xl:     20,
  '2xl':  24,
  full:   9999,
} as const;

export const iconSize = {
  xs:   16,
  sm:   20,
  base: 24,
  md:   28,
  lg:   32,
  xl:   40,
} as const;

export type Spacing    = keyof typeof spacing;
export type Radius     = keyof typeof radius;
export type IconSize   = keyof typeof iconSize;
