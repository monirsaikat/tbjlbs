import type { IAuthRepository }                           from '../../domain/repositories';
import type { UserEntity, SessionEntity }                  from '../../domain/entities';
import type { SendOTPInput, VerifyOTPInput, RegisterInput } from '../../domain/value-objects';
import { useAuthStore }                                    from '@shared/stores/auth.store';

/**
 * AuthService — application layer orchestrator.
 *
 * Responsibilities:
 *  • Invoke repository methods
 *  • Sync results into global Zustand store
 *  • Coordinate cross-cutting concerns (e.g. connect WebSocket after login)
 *
 * Depends on IAuthRepository (interface), not AuthRepository (class) → DIP.
 */
export class AuthService {
  constructor(private readonly repo: IAuthRepository) {}

  async sendOTP(input: SendOTPInput): Promise<void> {
    await this.repo.sendOTP(input);
  }

  async verifyOTP(input: VerifyOTPInput): Promise<SessionEntity> {
    const session = await this.repo.verifyOTP(input);
    useAuthStore.getState().setSession({
      accessToken:  session.accessToken,
      refreshToken: session.refreshToken,
      expiresAt:    session.expiresAt,
    });
    return session;
  }

  async register(input: RegisterInput): Promise<SessionEntity> {
    const session = await this.repo.register(input);
    useAuthStore.getState().setSession({
      accessToken:  session.accessToken,
      refreshToken: session.refreshToken,
      expiresAt:    session.expiresAt,
    });
    return session;
  }

  async logout(): Promise<void> {
    await this.repo.logout();
    useAuthStore.getState().reset();
  }

  async fetchCurrentUser(): Promise<UserEntity | null> {
    const user = await this.repo.getCurrentUser();
    if (user) {
      useAuthStore.getState().setUser({
        id:          user.id,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        avatarUrl:   user.avatarUrl,
        status:      user.status,
      });
    }
    return user;
  }

  isAuthenticated(): boolean {
    return this.repo.isAuthenticated();
  }
}
