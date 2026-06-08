import type { UserEntity, SessionEntity } from '../../domain/entities';
import type { UserDTO, SessionDTO }        from '../dto';

/**
 * Stateless transformer — DTO (API shape) → Entity (domain shape).
 * No business logic, no side effects.
 */
export class AuthMapper {
  static toUserEntity(dto: UserDTO): UserEntity {
    return {
      id:          dto.id,
      phoneNumber: dto.phone_number,
      displayName: dto.display_name,
      avatarUrl:   dto.avatar_url,
      status:      dto.status,
      bio:         dto.bio,
      isVerified:  dto.is_verified,
      lastSeenAt:  dto.last_seen_at,
      createdAt:   dto.created_at,
      updatedAt:   dto.updated_at,
    };
  }

  static toSessionEntity(dto: SessionDTO): SessionEntity {
    return {
      accessToken:  dto.access_token,
      refreshToken: dto.refresh_token,
      expiresAt:    dto.expires_at,
      tokenType:    dto.token_type,
    };
  }
}
