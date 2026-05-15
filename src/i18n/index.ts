import type { Language } from '../types';

type Dict = Record<string, string>;

const en: Dict = {
  appName: 'SOSKA',
  gateTitle: 'Welcome',
  gateSubtitle: 'Sharjah laptops & electronics',
  language: 'Language',
  role: 'Role',
  continue: 'Continue',
  switchRole: 'Switch role',
  support: 'Support',
  mapsOpen: 'Open route in Google Maps',
  mockBanner: 'Prototype — mock data only',
  searchPlaceholder: 'Search models or brands…',
  browseSamples: 'Browse sample models',
  deals: 'Deals',
  messages: 'Messages',
  stock: 'Stock',
  profile: 'Profile',
  dashboard: 'Dashboard',
  save: 'Save',
  send: 'Send',
  requestCheck: 'Request check',
  requestDelivery: 'Request delivery',
};

const ru: Dict = { ...en, gateTitle: 'Добро пожаловать', language: 'Язык', role: 'Роль', continue: 'Далее', switchRole: 'Сменить роль', support: 'Поддержка' };
const ur: Dict = { ...en, gateTitle: 'خوش آمدید', language: 'زبان', role: 'کردار', continue: 'جاری رکھیں', switchRole: 'کردار تبدیل کریں', support: 'سپورٹ' };
const ar: Dict = { ...en, gateTitle: 'مرحباً', language: 'اللغة', role: 'الدور', continue: 'متابعة', switchRole: 'تبديل الدور', support: 'الدعم' };

const table: Record<Language, Dict> = { en, ru, ur, ar };

export function t(lang: Language, key: keyof typeof en): string {
  const dict = table[lang] ?? en;
  return dict[key] ?? en[key] ?? key;
}

export const languageLabels: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  ur: 'اردو',
  ar: 'العربية',
};
