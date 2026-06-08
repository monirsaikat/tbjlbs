import type { IAuthRepository }                           from '../../domain/repositories';
import type { UserEntity, SessionEntity }                  from '../../domain/entities';
import type { SendOTPInput, VerifyOTPInput, RegisterInput } from '../../domain/value-objects';
import { AuthRemoteDataSource }                            from '../datasources/remote';
import { AuthLocalDataSource }                             from '../datasources/local';
import { AuthMapper }                                      from '../mappers';

/**
 * Concrete repository — the single point that stitches together:
 *  • remote data source (HTTP)
 *  • local data source (MMKV)
 *  • mapper (DTO → Entity)
 *
 * The application/service layer depends only on IAuthRepository, not this class.
 */
export class AuthRepository implements IAuthRepository {
  constructor(
    private readonly remote: AuthRemoteDataSource,
    private readonly local:  AuthLocalDataSource,
  ) {}

  async sendOTP(input: SendOTPInput): Promise<void> {
    await this.remote.sendOTP(input);
  }

  async verifyOTP(input: VerifyOTPInput): Promise<SessionEntity> {
    const dto     = await this.remote.verifyOTP(input);
    const session = AuthMapper.toSessionEntity(dto);
    this.local.saveSession(session);
    return session;
  }

  async register(input: RegisterInput): Promise<SessionEntity> {
    const dto     = await this.remote.register(input);
    const session = AuthMapper.toSessionEntity(dto.session);
    this.local.saveSession(session);
    return session;
  }

  async logout(): Promise<void> {
    await this.remote.logout();
    this.local.clearSession();
  }

  async refreshSession(refreshToken: string): Promise<SessionEntity> {
    const dto     = await this.remote.refreshToken(refreshToken);
    const session = AuthMapper.toSessionEntity(dto);
    this.local.saveSession(session);
    return session;
  }

  async getCurrentUser(): Promise<UserEntity | null> {
    const dto = await this.remote.getMe();
    return AuthMapper.toUserEntity(dto);
  }

  isAuthenticated(): boolean {
    return this.local.hasValidSession();
  }
}
