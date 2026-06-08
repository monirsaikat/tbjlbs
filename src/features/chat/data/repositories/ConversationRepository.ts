import type { IConversationRepository }                    from '../../domain/repositories';
import type { ConversationEntity }                          from '../../domain/entities';
import type { PaginatedResponse, PaginationParams }         from '@shared/types/api.types';
import { ChatRemoteDataSource }                             from '../datasources/remote';
import { ConversationMapper }                               from '../mappers';

export class ConversationRepository implements IConversationRepository {
  constructor(private readonly remote: ChatRemoteDataSource) {}

  async getConversations(params?: PaginationParams): Promise<PaginatedResponse<ConversationEntity>> {
    const response = await this.remote.getConversations(params);
    return {
      ...response,
      data: response.data.map(ConversationMapper.toEntity),
    };
  }

  async getConversation(id: string): Promise<ConversationEntity> {
    const dto = await this.remote.getConversation(id);
    return ConversationMapper.toEntity(dto);
  }

  async createDirectConversation(participantUserId: string): Promise<ConversationEntity> {
    // POST /api/v1/conversations { type: 'direct', participant_id: userId }
    throw new Error('Not yet implemented');
  }

  async archiveConversation(id: string): Promise<void> {
    throw new Error('Not yet implemented');
  }

  async pinConversation(id: string, _pinned: boolean): Promise<void> {
    throw new Error('Not yet implemented');
  }

  async muteConversation(id: string, _muted: boolean): Promise<void> {
    throw new Error('Not yet implemented');
  }

  async deleteConversation(id: string): Promise<void> {
    throw new Error('Not yet implemented');
  }
}
