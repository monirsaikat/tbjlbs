import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type SettingsStackParamList = {
  SettingsHome:        undefined;
  PrivacySettings:     undefined;
  NotificationSettings:undefined;
  SecuritySettings:    undefined;
  StorageSettings:     undefined;
  AppearanceSettings:  undefined;
  HelpCenter:          undefined;
  About:               undefined;
};

export type SettingsScreenProps<T extends keyof SettingsStackParamList> = {
  navigation: StackNavigationProp<SettingsStackParamList, T>;
  route:      RouteProp<SettingsStackParamList, T>;
};
