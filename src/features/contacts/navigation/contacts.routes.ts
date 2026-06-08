import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type ContactsStackParamList = {
  ContactList:   undefined;
  ContactDetail: { contactId: string };
  BlockedList:   undefined;
  Invite:        undefined;
};

export type ContactsScreenProps<T extends keyof ContactsStackParamList> = {
  navigation: StackNavigationProp<ContactsStackParamList, T>;
  route:      RouteProp<ContactsStackParamList, T>;
};
