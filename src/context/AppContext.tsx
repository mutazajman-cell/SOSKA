import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Language, Role } from '../types';

type AppContextValue = {
  language: Language;
  role: Role;
  setLanguage: (l: Language) => void;
  setRole: (r: Role) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [role, setRoleState] = useState<Role>('buyer');

  const setRole = useCallback((r: Role) => {
    setRoleState(r);
  }, []);

  const value = useMemo(
    () => ({ language, role, setLanguage, setRole }),
    [language, role, setLanguage, setRole],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
