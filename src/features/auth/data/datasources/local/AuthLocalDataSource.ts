import { appStorage } from '@infrastructure/storage';
import type { SessionEntity } from '../../../domain/entities';

const KEYS = {
  SESSION: 'auth:session',
} as const;

/** Persists session credentials to MMKV. Reads/writes JSON. */
export class AuthLocalDataSource {
  saveSession(session: SessionEntity): void {
    appStorage.setString(KEYS.SESSION, JSON.stringify(session));
  }

  getSession(): SessionEntity | null {
    const raw = appStorage.getString(KEYS.SESSION);
    if (!raw) return null;
    return JSON.parse(raw) as SessionEntity;
  }

  clearSession(): void {
    appStorage.delete(KEYS.SESSION);
  }

  hasValidSession(): boolean {
    const session = this.getSession();
    if (!session) return false;
    return new Date(session.expiresAt) > new Date();
  }
}
