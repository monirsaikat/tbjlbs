export const CHAT_ENDPOINTS = {
  conversations:              '/api/v1/conversations',
  conversation:               (id: string) => `/api/v1/conversations/${id}`,
  messages:                   (conversationId: string) => `/api/v1/conversations/${conversationId}/messages`,
  message:                    (conversationId: string, messageId: string) => `/api/v1/conversations/${conversationId}/messages/${messageId}`,
  markRead:                   (conversationId: string) => `/api/v1/conversations/${conversationId}/read`,
  attachments:                (conversationId: string) => `/api/v1/conversations/${conversationId}/attachments`,
  reactions:                  (conversationId: string, messageId: string) => `/api/v1/conversations/${conversationId}/messages/${messageId}/reactions`,
  typing:                     (conversationId: string) => `/api/v1/conversations/${conversationId}/typing`,
} as const;
