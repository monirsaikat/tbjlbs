/**
 * Typed WebSocket / Pusher / Laravel Echo event catalogue.
 * Every event name and its payload shape lives here — never inline strings.
 */

export interface MessageSentEvent {
  event:          'message.sent';
  conversationId: string;
  message: {
    id:        string;
    body:      string;
    senderId:  string;
    type:      string;
    createdAt: string;
  };
}

export interface MessageReadEvent {
  event:          'message.read';
  conversationId: string;
  messageIds:     string[];
  readBy:         string;
  readAt:         string;
}

export interface MessageDeletedEvent {
  event:          'message.deleted';
  conversationId: string;
  messageId:      string;
}

export interface TypingStartedEvent {
  event:          'typing.started';
  conversationId: string;
  userId:         string;
}

export interface TypingStoppedEvent {
  event:          'typing.stopped';
  conversationId: string;
  userId:         string;
}

export interface UserPresenceEvent {
  event:   'user.presence';
  userId:  string;
  status:  'online' | 'offline';
  lastSeenAt: string | null;
}

export interface CallInitiatedEvent {
  event:       'call.initiated';
  callId:      string;
  callerId:    string;
  callType:    'audio' | 'video';
  conversationId: string;
}

export interface CallEndedEvent {
  event:    'call.ended';
  callId:   string;
  duration: number;
  reason:   'hangup' | 'missed' | 'declined' | 'busy';
}

export type WebSocketEvent =
  | MessageSentEvent
  | MessageReadEvent
  | MessageDeletedEvent
  | TypingStartedEvent
  | TypingStoppedEvent
  | UserPresenceEvent
  | CallInitiatedEvent
  | CallEndedEvent;

export type WebSocketEventName = WebSocketEvent['event'];
export type WebSocketEventPayload<E extends WebSocketEventName> = Extract<WebSocketEvent, { event: E }>;
