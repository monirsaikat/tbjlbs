import { useQuery }    from '@tanstack/react-query';
import { QUERY_KEYS }  from '@shared/constants';
import { chatService } from '../factories';

export const useConversation = (id: string) =>
  useQuery({
    queryKey: QUERY_KEYS.chat.conversation(id),
    queryFn:  () => chatService.getConversation(id),
    enabled:  !!id,
  });
