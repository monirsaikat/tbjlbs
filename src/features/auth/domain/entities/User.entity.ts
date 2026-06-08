export type UserStatus = 'online' | 'offline' | 'away';

/** Immutable domain entity — never mutate, always replace. */
export interface UserEntity {
  readonly id:          string;
  readonly phoneNumber: string;
  readonly displayName: string;
  readonly avatarUrl:   string | null;
  readonly status:      UserStatus;
  readonly bio:         string | null;
  readonly isVerified:  boolean;
  readonly lastSeenAt:  string | null;
  readonly createdAt:   string;
  readonly updatedAt:   string;
}
