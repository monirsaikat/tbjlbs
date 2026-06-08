/** Ordered lifecycle: pending → sent → delivered → read */
export type MessageStatus = 'pending' | 'sent' | 'delivered' | 'read' | 'failed';

export const MESSAGE_STATUS_ORDER: Record<MessageStatus, number> = {
  pending:   0,
  sent:      1,
  delivered: 2,
  read:      3,
  failed:    -1,
};

/** Returns true when newStatus supersedes currentStatus */
export const isStatusUpgrade = (current: MessageStatus, next: MessageStatus): boolean =>
  MESSAGE_STATUS_ORDER[next] > MESSAGE_STATUS_ORDER[current];
