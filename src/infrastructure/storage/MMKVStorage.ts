import { MMKV } from 'react-native-mmkv';
import type { IStorage } from './IStorage';

export class MMKVStorage implements IStorage {
  private readonly store: MMKV;

  constructor(id: string = 'app-storage', encryptionKey?: string) {
    this.store = new MMKV({ id, encryptionKey });
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

/** Pre-built instances for common use cases */
export const appStorage    = new MMKVStorage('app-storage');
export const cacheStorage  = new MMKVStorage('cache-storage');
