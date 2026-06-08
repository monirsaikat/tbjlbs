import type { IMessageRepository, SendMessageInput }   from '../../domain/repositories';
import type { MessageEntity }                           from '../../domain/entities';
import type { PaginatedResponse, PaginationParams }     from '@shared/types/api.types';
import { ChatRemoteDataSource }                         from '../datasources/remote';
import { ChatLocalDataSource }                          from '../datasources/local';
import { MessageMapper }                                from '../mappers';

export class MessageRepository implements IMessageRepository {
  constructor(
    private readonly remote: ChatRemoteDataSource,
    private readonly local:  ChatLocalDataSource,
  ) {}

  async getMessages(conversationId: string, params?: PaginationParams): Promise<PaginatedResponse<MessageEntity>> {
    const response = await this.remote.getMessages(conversationId, params);
    const entities = response.data.map(MessageMapper.toEntity);
    this.local.cacheMessages(conversationId, entities);
    return { ...response, data: entities };
  }

  async sendMessage(input: SendMessageInput): Promise<MessageEntity> {
    const dto    = await this.remote.sendMessage(input);
    const entity = MessageMapper.toEntity(dto);
    this.local.appendMessage(input.conversationId, entity);
    return entity;
  }

  async deleteMessage(_conversationId: string, _messageId: string): Promise<void> {
    throw new Error('Not yet implemented');
  }

  async editMessage(_conversationId: string, _messageId: string, _newBody: string): Promise<MessageEntity> {
    throw new Error('Not yet implemented');
  }

  async markAsRead(conversationId: string, messageIds: string[]): Promise<void> {
    await this.remote.markRead(conversationId, messageIds);
  }

  async addReaction(conversationId: string, messageId: string, emoji: string): Promise<void> {
    await this.remote.addReaction(conversationId, messageId, emoji);
  }

  async removeReaction(conversationId: string, messageId: string, emoji: string): Promise<void> {
    await this.remote.removeReaction(conversationId, messageId, emoji);
  }

  async forwardMessage(_messageId: string, _targetConversationIds: string[]): Promise<void> {
    throw new Error('Not yet implemented');
  }
}
