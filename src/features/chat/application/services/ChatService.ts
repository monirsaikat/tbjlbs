import type { IConversationRepository, IMessageRepository, SendMessageInput } from '../../domain/repositories';
import type { ConversationEntity, MessageEntity }                              from '../../domain/entities';
import type { PaginatedResponse, PaginationParams }                            from '@shared/types/api.types';
import { webSocketClient }                                                     from '@infrastructure/websocket';

export class ChatService {
  constructor(
    private readonly conversations: IConversationRepository,
    private readonly messages:      IMessageRepository,
  ) {}

  async getConversations(params?: PaginationParams): Promise<PaginatedResponse<ConversationEntity>> {
    return this.conversations.getConversations(params);
  }

  async getConversation(id: string): Promise<ConversationEntity> {
    return this.conversations.getConversation(id);
  }

  async getMessages(conversationId: string, params?: PaginationParams): Promise<PaginatedResponse<MessageEntity>> {
    return this.messages.getMessages(conversationId, params);
  }

  async sendMessage(input: SendMessageInput): Promise<MessageEntity> {
    return this.messages.sendMessage(input);
  }

  async markAsRead(conversationId: string, messageIds: string[]): Promise<void> {
    return this.messages.markAsRead(conversationId, messageIds);
  }

  async addReaction(conversationId: string, messageId: string, emoji: string): Promise<void> {
    return this.messages.addReaction(conversationId, messageId, emoji);
  }

  subscribeToConversation(conversationId: string): void {
    const channel = `private-conversation.${conversationId}`;
    webSocketClient.subscribe(channel, 'message.sent',    () => {});
    webSocketClient.subscribe(channel, 'message.read',    () => {});
    webSocketClient.subscribe(channel, 'typing.started',  () => {});
    webSocketClient.subscribe(channel, 'typing.stopped',  () => {});
  }

  unsubscribeFromConversation(conversationId: string): void {
    webSocketClient.unsubscribe(`private-conversation.${conversationId}`);
  }
}
