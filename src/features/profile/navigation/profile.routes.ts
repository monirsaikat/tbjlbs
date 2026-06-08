import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type ProfileStackParamList = {
  MyProfile:    undefined;
  EditProfile:  undefined;
  UserProfile:  { userId: string };
  QRCode:       undefined;
};

export type ProfileScreenProps<T extends keyof ProfileStackParamList> = {
  navigation: StackNavigationProp<ProfileStackParamList, T>;
  route:      RouteProp<ProfileStackParamList, T>;
};
