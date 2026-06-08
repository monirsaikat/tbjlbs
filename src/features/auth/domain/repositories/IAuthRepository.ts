import type { UserEntity, SessionEntity }         from '../entities';
import type { SendOTPInput, VerifyOTPInput, RegisterInput } from '../value-objects';

/**
 * Auth repository contract — domain layer owns this interface.
 * The data layer provides the implementation.
 * This inversion keeps business rules independent of HTTP / storage details.
 */
export interface IAuthRepository {
  sendOTP(input: SendOTPInput): Promise<void>;
  verifyOTP(input: VerifyOTPInput): Promise<SessionEntity>;
  register(input: RegisterInput): Promise<SessionEntity>;
  logout(): Promise<void>;
  refreshSession(refreshToken: string): Promise<SessionEntity>;
  getCurrentUser(): Promise<UserEntity | null>;
  isAuthenticated(): boolean;
}
