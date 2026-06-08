import { apiClient }        from '@shared/api/client';
import { CHAT_ENDPOINTS }   from '@shared/api/endpoints';
import type { ApiResponse, PaginatedResponse, PaginationParams } from '@shared/types/api.types';
import type { ConversationDTO, MessageDTO } from '../../dto';
import type { SendMessageInput }            from '../../../domain/repositories';

export class ChatRemoteDataSource {
  async getConversations(params?: PaginationParams): Promise<PaginatedResponse<ConversationDTO>> {
    const { data } = await apiClient.get<PaginatedResponse<ConversationDTO>>(
      CHAT_ENDPOINTS.conversations,
      { params },
    );
    return data;
  }

  async getConversation(id: string): Promise<ConversationDTO> {
    const { data } = await apiClient.get<ApiResponse<ConversationDTO>>(
      CHAT_ENDPOINTS.conversation(id),
    );
    return data.data;
  }

  async getMessages(conversationId: string, params?: PaginationParams): Promise<PaginatedResponse<MessageDTO>> {
    const { data } = await apiClient.get<PaginatedResponse<MessageDTO>>(
      CHAT_ENDPOINTS.messages(conversationId),
      { params },
    );
    return data;
  }

  async sendMessage(input: SendMessageInput): Promise<MessageDTO> {
    const formData = new FormData();
    formData.append('type', input.type);
    if (input.body)       formData.append('body', input.body);
    if (input.replyToId)  formData.append('reply_to_id', input.replyToId);

    input.attachments?.forEach((file, i) => {
      formData.append(`attachments[${i}]`, {
        uri:  file.uri,
        type: file.mimeType,
        name: file.name,
      } as unknown as Blob);
    });

    const { data } = await apiClient.post<ApiResponse<MessageDTO>>(
      CHAT_ENDPOINTS.messages(input.conversationId),
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return data.data;
  }

  async markRead(conversationId: string, messageIds: string[]): Promise<void> {
    await apiClient.post(CHAT_ENDPOINTS.markRead(conversationId), { message_ids: messageIds });
  }

  async addReaction(conversationId: string, messageId: string, emoji: string): Promise<void> {
    await apiClient.post(CHAT_ENDPOINTS.reactions(conversationId, messageId), { emoji });
  }

  async removeReaction(conversationId: string, messageId: string, emoji: string): Promise<void> {
    await apiClient.delete(CHAT_ENDPOINTS.reactions(conversationId, messageId), { data: { emoji } });
  }
}
