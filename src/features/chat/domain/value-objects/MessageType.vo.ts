export type MessageType =
  | 'text'
  | 'image'
  | 'video'
  | 'audio'
  | 'file'
  | 'location'
  | 'sticker'
  | 'gif'
  | 'contact'
  | 'poll'
  | 'system'; // e.g. "You created this group"

export const isMediaMessage = (type: MessageType): boolean =>
  ['image', 'video', 'audio', 'file', 'gif'].includes(type);

export const isTextMessage = (type: MessageType): boolean =>
  type === 'text' || type === 'sticker';
