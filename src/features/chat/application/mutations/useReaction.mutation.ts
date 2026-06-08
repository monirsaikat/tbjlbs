import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS }                   from '@shared/constants';
import { chatService }                  from '../factories';

interface ReactionInput {
  messageId: string;
  emoji:     string;
}

export const useAddReaction = (conversationId: string) => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, ReactionInput>({
    mutationFn: ({ messageId, emoji }) =>
      chatService.addReaction(conversationId, messageId, emoji),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.chat.infiniteMessages(conversationId),
      }),
  });
};
