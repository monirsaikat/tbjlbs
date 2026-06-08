import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type CallsStackParamList = {
  CallHistory:    undefined;
  ActiveCall:     { callId: string; conversationId: string; type: 'audio' | 'video' };
  IncomingCall:   { callId: string; callerId: string; callerName: string; type: 'audio' | 'video' };
};

export type CallsScreenProps<T extends keyof CallsStackParamList> = {
  navigation: StackNavigationProp<CallsStackParamList, T>;
  route:      RouteProp<CallsStackParamList, T>;
};
