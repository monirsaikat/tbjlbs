import { useMutation }  from '@tanstack/react-query';
import { authService }   from '../factories';
import type { SessionEntity }   from '../../domain/entities';
import type { VerifyOTPInput }  from '../../domain/value-objects';

export const useVerifyOTP = () =>
  useMutation<SessionEntity, Error, VerifyOTPInput>({
    mutationFn: (input) => authService.verifyOTP(input),
  });
