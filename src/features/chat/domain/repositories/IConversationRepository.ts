import type { ConversationEntity } from '../entities';
import type { PaginatedResponse, PaginationParams } from '@shared/types/api.types';

export interface IConversationRepository {
  getConversations(params?: PaginationParams): Promise<PaginatedResponse<ConversationEntity>>;
  getConversation(id: string): Promise<ConversationEntity>;
  createDirectConversation(participantUserId: string): Promise<ConversationEntity>;
  archiveConversation(id: string): Promise<void>;
  pinConversation(id: string, pinned: boolean): Promise<void>;
  muteConversation(id: string, muted: boolean): Promise<void>;
  deleteConversation(id: string): Promise<void>;
}
