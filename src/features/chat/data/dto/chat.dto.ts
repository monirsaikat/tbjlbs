export interface ParticipantDTO {
  user_id:      string;
  display_name: string;
  avatar_url:   string | null;
  role:         'member' | 'admin' | 'owner';
  joined_at:    string;
}

export interface LastMessageDTO {
  id:          string;
  body:        string;
  sender_name: string;
  sent_at:     string;
}

export interface ConversationDTO {
  id:           string;
  type:         'direct' | 'group';
  name:         string | null;
  avatar_url:   string | null;
  participants: ParticipantDTO[];
  last_message: LastMessageDTO | null;
  unread_count: number;
  is_pinned:    boolean;
  is_muted:     boolean;
  is_archived:  boolean;
  created_at:   string;
  updated_at:   string;
}

export interface AttachmentDTO {
  url:        string;
  mime_type:  string;
  size:       number;
  width?:     number;
  height?:    number;
  duration?:  number;
  thumbnail?: string;
}

export interface ReactionDTO {
  emoji:    string;
  user_ids: string[];
  count:    number;
}

export interface MessageDTO {
  id:              string;
  conversation_id: string;
  sender_id:       string;
  sender_name:     string;
  type:            string;
  body:            string | null;
  attachments:     AttachmentDTO[];
  reactions:       ReactionDTO[];
  reply_to_id:     string | null;
  is_forwarded:    boolean;
  is_edited:       boolean;
  is_deleted:      boolean;
  status:          string;
  created_at:      string;
  edited_at:       string | null;
}
