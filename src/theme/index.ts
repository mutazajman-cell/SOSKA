/** Light, mobile-first palette — no neon, no dark trading UI */

export const colors = {
  bg: '#F4F5F7',
  surface: '#FFFFFF',
  border: '#E6E8EC',
  text: '#1B1F24',
  textMuted: '#5C6570',
  primary: '#2F6FED',
  primaryMuted: '#E8F0FF',
  success: '#2E7D4A',
  warning: '#C27A00',
  danger: '#C62828',
  chip: '#EDEFF2',
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
} as const;

export const fontSizes = {
  title: 22,
  subtitle: 17,
  body: 15,
  caption: 13,
} as const;
