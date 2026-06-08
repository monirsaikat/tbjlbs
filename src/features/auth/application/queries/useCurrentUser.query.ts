import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@shared/constants';
import { authService } from '../factories';
import type { UserEntity } from '../../domain/entities';

export const useCurrentUser = () =>
  useQuery<UserEntity | null, Error>({
    queryKey:  QUERY_KEYS.auth.currentUser,
    queryFn:   () => authService.fetchCurrentUser(),
    staleTime: 1000 * 60 * 5,
    enabled:   authService.isAuthenticated(),
  });
