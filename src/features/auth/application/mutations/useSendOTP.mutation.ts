import { useMutation } from '@tanstack/react-query';
import { authService }  from '../factories';
import type { SendOTPInput } from '../../domain/value-objects';

export const useSendOTP = () =>
  useMutation<void, Error, SendOTPInput>({
    mutationFn: (input) => authService.sendOTP(input),
  });
