import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type GroupsStackParamList = {
  GroupList:   undefined;
  GroupDetail: { groupId: string };
  GroupInfo:   { groupId: string };
  NewGroup:    undefined;
  AddMembers:  { groupId: string };
};

export type GroupsScreenProps<T extends keyof GroupsStackParamList> = {
  navigation: StackNavigationProp<GroupsStackParamList, T>;
  route:      RouteProp<GroupsStackParamList, T>;
};
