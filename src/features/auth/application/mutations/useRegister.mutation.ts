import { useMutation } from '@tanstack/react-query';
import { authService }  from '../factories';
import type { SessionEntity }  from '../../domain/entities';
import type { RegisterInput }  from '../../domain/value-objects';

export const useRegister = () =>
  useMutation<SessionEntity, Error, RegisterInput>({
    mutationFn: (input) => authService.register(input),
  });
