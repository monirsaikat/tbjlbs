export type NotificationType =
  | 'message'
  | 'group_message'
  | 'call_missed'
  | 'story_reaction'
  | 'story_view'
  | 'contact_joined'
  | 'group_invite';

export interface NotificationEntity {
  readonly id:         string;
  readonly type:       NotificationType;
  readonly title:      string;
  readonly body:       string;
  readonly data:       Record<string, string>;
  readonly isRead:     boolean;
  readonly createdAt:  string;
}
