import type { MessageEntity }                         from '../entities';
import type { PaginatedResponse, PaginationParams }   from '@shared/types/api.types';

export interface SendMessageInput {
  conversationId: string;
  type:           string;
  body?:          string;
  replyToId?:     string;
  attachments?:   Array<{ uri: string; mimeType: string; name: string }>;
}

export interface IMessageRepository {
  getMessages(conversationId: string, params?: PaginationParams): Promise<PaginatedResponse<MessageEntity>>;
  sendMessage(input: SendMessageInput): Promise<MessageEntity>;
  deleteMessage(conversationId: string, messageId: string): Promise<void>;
  editMessage(conversationId: string, messageId: string, newBody: string): Promise<MessageEntity>;
  markAsRead(conversationId: string, messageIds: string[]): Promise<void>;
  addReaction(conversationId: string, messageId: string, emoji: string): Promise<void>;
  removeReaction(conversationId: string, messageId: string, emoji: string): Promise<void>;
  forwardMessage(messageId: string, targetConversationIds: string[]): Promise<void>;
}
