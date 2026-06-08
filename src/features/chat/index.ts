/**
 * chat feature — public API surface.
 * Only export what other features legitimately consume.
 */

export type { ConversationEntity, ConversationType, MessageEntity, MessageStatus, MessageType } from './domain';
export { ChatNavigator }     from './navigation';
export type { ChatStackParamList, ChatScreenProps } from './navigation';
