import { useQuery }    from '@tanstack/react-query';
import { QUERY_KEYS }  from '@shared/constants';
import { chatService } from '../factories';

export const useConversations = () =>
  useQuery({
    queryKey: QUERY_KEYS.chat.conversations,
    queryFn:  () => chatService.getConversations(),
  });
