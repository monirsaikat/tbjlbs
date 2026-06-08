import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS }                   from '@shared/constants';
import { chatService }                  from '../factories';
import type { SendMessageInput }        from '../../domain/repositories';
import type { MessageEntity }           from '../../domain/entities';

export const useSendMessage = (conversationId: string) => {
  const queryClient = useQueryClient();

  return useMutation<MessageEntity, Error, Omit<SendMessageInput, 'conversationId'>>({
    mutationFn: (input) => chatService.sendMessage({ ...input, conversationId }),
    onSuccess:  () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chat.conversations });
    },
  });
};
