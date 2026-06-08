export type PrivacyLevel = 'everyone' | 'contacts' | 'nobody';

export interface PrivacySettings {
  readonly lastSeen:      PrivacyLevel;
  readonly profilePhoto:  PrivacyLevel;
  readonly about:         PrivacyLevel;
  readonly readReceipts:  boolean;
}

export interface NotificationSettings {
  readonly messageNotifs:    boolean;
  readonly groupNotifs:      boolean;
  readonly callNotifs:       boolean;
  readonly storyNotifs:      boolean;
  readonly sound:            boolean;
  readonly vibration:        boolean;
  readonly preview:          boolean;
}

export interface SettingsEntity {
  readonly privacy:       PrivacySettings;
  readonly notifications: NotificationSettings;
  readonly theme:         'light' | 'dark' | 'system';
  readonly language:      string;
  readonly fontSize:      'small' | 'medium' | 'large';
  readonly biometricLock: boolean;
  readonly autoDownload:  { wifi: boolean; mobile: boolean };
}
