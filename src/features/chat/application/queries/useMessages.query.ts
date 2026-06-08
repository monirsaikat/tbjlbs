import { useInfiniteQuery }  from '@tanstack/react-query';
import { QUERY_KEYS }         from '@shared/constants';
import { PAGINATION }         from '@shared/constants';
import { chatService }        from '../factories';
import type { PaginationParams } from '@shared/types/api.types';

export const useMessages = (conversationId: string) =>
  useInfiniteQuery({
    queryKey:        QUERY_KEYS.chat.infiniteMessages(conversationId),
    queryFn:         ({ pageParam }) =>
      chatService.getMessages(conversationId, pageParam as PaginationParams),
    initialPageParam: { page: 1, per_page: PAGINATION.MESSAGES_PER_PAGE },
    getNextPageParam: (lastPage) =>
      lastPage.meta.current_page < lastPage.meta.last_page
        ? { page: lastPage.meta.current_page + 1, per_page: PAGINATION.MESSAGES_PER_PAGE }
        : undefined,
    enabled: !!conversationId,
  });
