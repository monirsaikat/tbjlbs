import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Import only type — the entity lives in the auth feature domain.
// The store holds serialisable shape; full entity is reconstructed by the service.
export interface StoredUser {
  id:          string;
  phoneNumber: string;
  displayName: string;
  avatarUrl:   string | null;
  status:      'online' | 'offline' | 'away';
}

export interface StoredSession {
  accessToken:  string;
  refreshToken: string;
  expiresAt:    string;
}

interface AuthState {
  user:            StoredUser | null;
  session:         StoredSession | null;
  isAuthenticated: boolean;
  isHydrated:      boolean;
}

interface AuthActions {
  setUser:      (user: StoredUser | null) => void;
  setSession:   (session: StoredSession | null) => void;
  setHydrated:  (value: boolean) => void;
  reset:        () => void;
}

export type AuthStore = AuthState & AuthActions;

const INITIAL: AuthState = {
  user:            null,
  session:         null,
  isAuthenticated: false,
  isHydrated:      false,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    immer((set) => ({
      ...INITIAL,
      setUser: (user) =>
        set((s) => {
          s.user            = user;
          s.isAuthenticated = user !== null;
        }),
      setSession: (session) =>
        set((s) => {
          s.session = session;
        }),
      setHydrated: (value) =>
        set((s) => {
          s.isHydrated = value;
        }),
      reset: () => set(INITIAL),
    })),
    {
      name: 'auth-store',
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
