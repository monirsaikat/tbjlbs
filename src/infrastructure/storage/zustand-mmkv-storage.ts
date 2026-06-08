/**
 * Zustand `persist` middleware–compatible storage adapter backed by MMKV.
 * Pass this as the `storage` option in zustand/middleware `persist`.
 */
import type { StateStorage } from 'zustand/middleware';
import { appStorage } from './MMKVStorage';

export const zustandMMKVStorage: StateStorage = {
  getItem:    (name)        => appStorage.getString(name) ?? null,
  setItem:    (name, value) => appStorage.setString(name, value),
  removeItem: (name)        => appStorage.delete(name),
};
