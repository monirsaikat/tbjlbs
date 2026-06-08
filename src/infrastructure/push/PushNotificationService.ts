/**
 * Push notification service contract.
 * Implementation uses @notifee/react-native + Firebase/APNs.
 */

export type NotificationCategory =
  | 'message'
  | 'group_message'
  | 'call_incoming'
  | 'story_reaction'
  | 'contact_joined';

export interface PushPayload {
  id:           string;
  category:     NotificationCategory;
  title:        string;
  body:         string;
  data:         Record<string, string>;
  badge?:       number;
  imageUrl?:    string;
}

export interface IPushNotificationService {
  requestPermission(): Promise<boolean>;
  getDeviceToken(): Promise<string | null>;
  displayNotification(payload: PushPayload): Promise<void>;
  cancelNotification(id: string): Promise<void>;
  cancelAllNotifications(): Promise<void>;
  setBadgeCount(count: number): Promise<void>;
  onNotificationPress(handler: (data: Record<string, string>) => void): () => void;
  onForegroundMessage(handler: (payload: PushPayload) => void): () => void;
}

export class PushNotificationService implements IPushNotificationService {
  async requestPermission(): Promise<boolean> {
    throw new Error('Not implemented — wire in @notifee/react-native');
  }

  async getDeviceToken(): Promise<string | null> {
    throw new Error('Not implemented');
  }

  async displayNotification(_payload: PushPayload): Promise<void> {
    throw new Error('Not implemented');
  }

  async cancelNotification(_id: string): Promise<void> {
    throw new Error('Not implemented');
  }

  async cancelAllNotifications(): Promise<void> {
    throw new Error('Not implemented');
  }

  async setBadgeCount(_count: number): Promise<void> {
    throw new Error('Not implemented');
  }

  onNotificationPress(_handler: (data: Record<string, string>) => void): () => void {
    return () => {};
  }

  onForegroundMessage(_handler: (payload: PushPayload) => void): () => void {
    return () => {};
  }
}

export const pushNotificationService = new PushNotificationService();
