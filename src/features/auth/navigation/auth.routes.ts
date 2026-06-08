import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type AuthStackParamList = {
  Welcome:           undefined;
  PhoneEntry:        undefined;
  OTPVerification:   { phoneNumber: string };
  ProfileSetup:      { phoneNumber: string };
};

// Screen props helpers — import these in screen components, not the param list directly
export type AuthScreenProps<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>;
  route:      RouteProp<AuthStackParamList, T>;
};
