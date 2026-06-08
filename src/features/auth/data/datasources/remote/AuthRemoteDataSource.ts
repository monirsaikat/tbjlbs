import { apiClient }          from '@shared/api/client';
import { AUTH_ENDPOINTS }      from '@shared/api/endpoints';
import type { ApiResponse }    from '@shared/types/api.types';
import type { UserDTO, SessionDTO, AuthResponseDTO } from '../../dto';
import type { SendOTPInput, VerifyOTPInput, RegisterInput } from '../../../domain/value-objects';

/** Adapts HTTP responses to raw DTOs. No entity mapping — that is the Mapper's job. */
export class AuthRemoteDataSource {
  async sendOTP(input: SendOTPInput): Promise<void> {
    await apiClient.post(AUTH_ENDPOINTS.sendOTP, { phone_number: input.phoneNumber });
  }

  async verifyOTP(input: VerifyOTPInput): Promise<SessionDTO> {
    const { data } = await apiClient.post<ApiResponse<SessionDTO>>(
      AUTH_ENDPOINTS.verifyOTP,
      { phone_number: input.phoneNumber, otp: input.otp },
    );
    return data.data;
  }

  async register(input: RegisterInput): Promise<AuthResponseDTO> {
    const { data } = await apiClient.post<ApiResponse<AuthResponseDTO>>(
      AUTH_ENDPOINTS.register,
      {
        phone_number:  input.phoneNumber,
        display_name:  input.displayName,
        otp:           input.otp,
      },
    );
    return data.data;
  }

  async logout(): Promise<void> {
    await apiClient.post(AUTH_ENDPOINTS.logout);
  }

  async refreshToken(refreshToken: string): Promise<SessionDTO> {
    const { data } = await apiClient.post<ApiResponse<SessionDTO>>(
      AUTH_ENDPOINTS.refresh,
      { refresh_token: refreshToken },
    );
    return data.data;
  }

  async getMe(): Promise<UserDTO> {
    const { data } = await apiClient.get<ApiResponse<UserDTO>>(AUTH_ENDPOINTS.me);
    return data.data;
  }
}
