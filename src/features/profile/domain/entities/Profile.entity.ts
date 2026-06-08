export interface ProfileEntity {
  readonly id:          string;
  readonly phoneNumber: string;
  readonly displayName: string;
  readonly bio:         string | null;
  readonly avatarUrl:   string | null;
  readonly status:      'online' | 'offline' | 'away';
  readonly lastSeenAt:  string | null;
  readonly createdAt:   string;
}
