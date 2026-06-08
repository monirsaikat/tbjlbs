import type { ProfileEntity } from '../entities/Profile.entity';

export interface UpdateProfileInput {
  displayName?: string;
  bio?:         string;
  avatarUri?:   string;
}

export interface IProfileRepository {
  getMyProfile(): Promise<ProfileEntity>;
  updateMyProfile(input: UpdateProfileInput): Promise<ProfileEntity>;
  getUserProfile(userId: string): Promise<ProfileEntity>;
  searchUsers(query: string): Promise<ProfileEntity[]>;
}
