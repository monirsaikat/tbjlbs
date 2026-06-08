import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type AppTheme    = 'light' | 'dark' | 'system';
export type AppLanguage = 'en' | 'ar' | 'fr' | 'de' | 'es';

interface AppState {
  theme:          AppTheme;
  language:       AppLanguage;
  isOnline:       boolean;
  biometricEnabled: boolean;
  notificationsEnabled: boolean;
}

interface AppActions {
  setTheme:                 (theme: AppTheme) => void;
  setLanguage:              (lang: AppLanguage) => void;
  setOnline:                (online: boolean) => void;
  setBiometricEnabled:      (value: boolean) => void;
  setNotificationsEnabled:  (value: boolean) => void;
}

export type AppStore = AppState & AppActions;

const INITIAL: AppState = {
  theme:                'system',
  language:             'en',
  isOnline:             true,
  biometricEnabled:     false,
  notificationsEnabled: true,
};

export const useAppStore = create<AppStore>()(
  persist(
    immer((set) => ({
      ...INITIAL,
      setTheme:               (theme)   => set((s) => { s.theme = theme; }),
      setLanguage:            (lang)    => set((s) => { s.language = lang; }),
      setOnline:              (online)  => set((s) => { s.isOnline = online; }),
      setBiometricEnabled:    (value)   => set((s) => { s.biometricEnabled = value; }),
      setNotificationsEnabled:(value)   => set((s) => { s.notificationsEnabled = value; }),
    })),
    { name: 'app-store' },
  ),
);
