/** Contract every storage adapter must satisfy. */
export interface IStorage {
  getString(key: string): string | undefined;
  setString(key: string, value: string): void;
  delete(key: string): void;
  contains(key: string): boolean;
  clearAll(): void;
}
