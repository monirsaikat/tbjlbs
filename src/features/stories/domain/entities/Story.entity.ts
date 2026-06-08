export type StoryMediaType = 'image' | 'video' | 'text';
export type StoryPrivacy   = 'everyone' | 'contacts' | 'close_friends';

export interface StoryReaction {
  readonly emoji:  string;
  readonly userId: string;
}

export interface StoryEntity {
  readonly id:           string;
  readonly userId:       string;
  readonly userName:     string;
  readonly userAvatar:   string | null;
  readonly mediaUrl:     string | null;
  readonly mediaType:    StoryMediaType;
  readonly caption:      string | null;
  readonly duration:     number;   // seconds (video) or display time (image)
  readonly privacy:      StoryPrivacy;
  readonly viewerCount:  number;
  readonly reactions:    StoryReaction[];
  readonly isViewed:     boolean;
  readonly expiresAt:    string;
  readonly createdAt:    string;
}

export interface StoryFeedUser {
  readonly userId:    string;
  readonly userName:  string;
  readonly userAvatar:string | null;
  readonly stories:   StoryEntity[];
  readonly hasUnread: boolean;
}
