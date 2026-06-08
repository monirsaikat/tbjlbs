import { cacheStorage } from '@infrastructure/storage';
import type { MessageEntity } from '../../../domain/entities';

const key = (conversationId: string) => `chat:messages:${conversationId}`;

/**
 * Local cache for messages (MMKV).
 * Acts as an offline-first read layer. Writes through to remote.
 */
export class ChatLocalDataSource {
  getCachedMessages(conversationId: string): MessageEntity[] {
    const raw = cacheStorage.getString(key(conversationId));
    if (!raw) return [];
    return JSON.parse(raw) as MessageEntity[];
  }

  cacheMessages(conversationId: string, messages: MessageEntity[]): void {
    cacheStorage.setString(key(conversationId), JSON.stringify(messages));
  }

  appendMessage(conversationId: string, message: MessageEntity): void {
    const existing = this.getCachedMessages(conversationId);
    const updated  = [message, ...existing].slice(0, 200); // keep last 200
    this.cacheMessages(conversationId, updated);
  }

  clearCache(conversationId: string): void {
    cacheStorage.delete(key(conversationId));
  }
}
