export type ParticipantRole = 'member' | 'admin' | 'owner';

export interface ParticipantEntity {
  readonly userId:      string;
  readonly displayName: string;
  readonly avatarUrl:   string | null;
  readonly role:        ParticipantRole;
  readonly joinedAt:    string;
}
