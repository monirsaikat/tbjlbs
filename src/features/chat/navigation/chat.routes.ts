import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type ChatStackParamList = {
  ConversationList:  undefined;
  Conversation:      { conversationId: string; title: string };
  ConversationInfo:  { conversationId: string };
  MediaViewer:       { mediaUrl: string; mimeType: string; title?: string };
  ForwardMessage:    { messageId: string };
  NewConversation:   undefined;
  Search:            undefined;
};

export type ChatScreenProps<T extends keyof ChatStackParamList> = {
  navigation: StackNavigationProp<ChatStackParamList, T>;
  route:      RouteProp<ChatStackParamList, T>;
};
