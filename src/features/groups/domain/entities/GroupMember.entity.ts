export type GroupMemberRole = 'member' | 'admin' | 'owner';

export interface GroupMemberEntity {
  readonly userId:      string;
  readonly displayName: string;
  readonly avatarUrl:   string | null;
  readonly role:        GroupMemberRole;
  readonly joinedAt:    string;
  readonly addedBy:     string | null;
}
