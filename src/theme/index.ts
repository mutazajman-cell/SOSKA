/** Light, mobile-first marketplace palette — no neon, no dark trading UI */

export const colors = {
  bg: '#ECEEF1',
  bgElevated: '#F8F9FB',
  surface: '#FFFFFF',
  surfaceMuted: '#FAFAFB',
  border: '#E2E5EA',
  borderLight: '#EEF0F3',
  text: '#12151A',
  textSecondary: '#3D4450',
  textMuted: '#6B7280',
  textPlaceholder: '#9CA3AF',
  primary: '#1E3A5F',
  primarySoft: '#E8EEF5',
  accent: '#C45C26',
  accentMuted: '#FDF4EF',
  success: '#2F6B4F',
  successMuted: '#E8F5EE',
  warning: '#A16207',
  warningMuted: '#FEF9C3',
  danger: '#B42318',
  dangerMuted: '#FDECEC',
  chip: '#EEF1F5',
  chipActive: '#DCE6F2',
  overlay: 'rgba(15, 23, 42, 0.04)',
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 36,
} as const;

export const radius = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 22,
  full: 999,
} as const;

export const fontSizes = {
  hero: 28,
  title: 22,
  subtitle: 17,
  body: 15,
  caption: 13,
  micro: 11,
} as const;

/** Card / sheet elevation (iOS + Android) */
export const shadows = {
  card: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHover: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
} as const;

/** Keeps content readable on tablets / web while staying mobile-first */
export const layout = {
  maxContentWidth: 440,
} as const;
