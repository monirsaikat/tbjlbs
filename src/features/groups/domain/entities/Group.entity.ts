export interface GroupEntity {
  readonly id:           string;
  readonly name:         string;
  readonly description:  string | null;
  readonly avatarUrl:    string | null;
  readonly memberCount:  number;
  readonly maxMembers:   number;
  readonly creatorId:    string;
  readonly inviteLink:   string | null;
  readonly isPublic:     boolean;
  readonly createdAt:    string;
}
