import { useMutation } from '@tanstack/react-query';
import { chatService }  from '../factories';

export const useMarkAsRead = (conversationId: string) =>
  useMutation<void, Error, string[]>({
    mutationFn: (messageIds) => chatService.markAsRead(conversationId, messageIds),
  });
