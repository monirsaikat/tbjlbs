export interface ContactEntity {
  readonly id:             string;
  readonly userId:         string | null; // null = not on app
  readonly phoneNumber:    string;
  readonly displayName:    string;
  readonly avatarUrl:      string | null;
  readonly isBlocked:      boolean;
  readonly isOnApp:        boolean;
  readonly lastSeenAt:     string | null;
}
