import type { ParticipantEntity } from './Participant.entity';

export type ConversationType = 'direct' | 'group';

export interface LastMessagePreview {
  readonly id:         string;
  readonly body:       string;
  readonly senderName: string;
  readonly sentAt:     string;
}

export interface ConversationEntity {
  readonly id:              string;
  readonly type:            ConversationType;
  readonly name:            string | null;      // null for direct chats
  readonly avatarUrl:       string | null;
  readonly participants:    ParticipantEntity[];
  readonly lastMessage:     LastMessagePreview | null;
  readonly unreadCount:     number;
  readonly isPinned:        boolean;
  readonly isMuted:         boolean;
  readonly isArchived:      boolean;
  readonly createdAt:       string;
  readonly updatedAt:       string;
}
