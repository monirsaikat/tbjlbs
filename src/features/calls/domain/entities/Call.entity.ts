export type CallType      = 'audio' | 'video';
export type CallDirection = 'incoming' | 'outgoing';
export type CallStatus    = 'ringing' | 'active' | 'ended' | 'missed' | 'declined' | 'busy' | 'failed';

export interface CallEntity {
  readonly id:              string;
  readonly conversationId:  string;
  readonly callerId:        string;
  readonly callerName:      string;
  readonly callerAvatar:    string | null;
  readonly type:            CallType;
  readonly direction:       CallDirection;
  readonly status:          CallStatus;
  readonly duration:        number | null; // seconds
  readonly startedAt:       string | null;
  readonly endedAt:         string | null;
  readonly createdAt:       string;
}
