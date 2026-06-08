import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authService }                  from '../factories';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, void>({
    mutationFn: () => authService.logout(),
    onSuccess:  () => queryClient.clear(),
  });
};
