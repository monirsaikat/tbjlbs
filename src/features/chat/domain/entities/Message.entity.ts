import type { MessageStatus } from '../value-objects/MessageStatus.vo';
import type { MessageType }   from '../value-objects/MessageType.vo';

export interface MediaAttachment {
  readonly url:       string;
  readonly mimeType:  string;
  readonly size:      number;       // bytes
  readonly width?:    number;
  readonly height?:   number;
  readonly duration?: number;       // seconds (audio/video)
  readonly thumbnail?: string;     // base64 or URL
}

export interface MessageReaction {
  readonly emoji:    string;
  readonly userIds:  string[];
  readonly count:    number;
}

export interface MessageEntity {
  readonly id:              string;
  readonly conversationId:  string;
  readonly senderId:        string;
  readonly senderName:      string;
  readonly type:            MessageType;
  readonly body:            string | null;
  readonly attachments:     MediaAttachment[];
  readonly reactions:       MessageReaction[];
  readonly replyToId:       string | null;
  readonly isForwarded:     boolean;
  readonly isEdited:        boolean;
  readonly isDeleted:       boolean;
  readonly status:          MessageStatus;
  readonly createdAt:       string;
  readonly editedAt:        string | null;
}
