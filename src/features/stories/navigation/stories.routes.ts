import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp }           from '@react-navigation/native';

export type StoriesStackParamList = {
  StoriesFeed:   undefined;
  StoryViewer:   { userId: string; initialIndex?: number };
  StoryCompose:  undefined;
  StoryViewers:  { storyId: string };
};

export type StoriesScreenProps<T extends keyof StoriesStackParamList> = {
  navigation: StackNavigationProp<StoriesStackParamList, T>;
  route:      RouteProp<StoriesStackParamList, T>;
};
