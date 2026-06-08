/**
 * Secure key-value store backed by MMKV with per-instance encryption key.
 * Use for access tokens, refresh tokens, E2E private keys.
 *
 * The encryption key itself should be fetched from the platform keychain
 * (react-native-keychain) on first launch and stored in memory only.
 */
import { MMKV } from 'react-native-mmkv';
import type { IStorage } from './IStorage';

export class SecureStorage implements IStorage {
  private readonly store: MMKV;

  constructor(encryptionKey: string) {
    this.store = new MMKV({ id: 'secure-storage', encryptionKey });
  }

  getString(key: string): string | undefined {
    return this.store.getString(key);
  }

  setString(key: string, value: string): void {
    this.store.set(key, value);
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  contains(key: string): boolean {
    return this.store.contains(key);
  }

  clearAll(): void {
    this.store.clearAll();
  }
}
