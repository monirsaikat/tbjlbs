import type { MessageEntity, MediaAttachment, MessageReaction } from '../../domain/entities';
import type { MessageDTO, AttachmentDTO, ReactionDTO }           from '../dto';
import type { MessageStatus }                                    from '../../domain/value-objects';

export class MessageMapper {
  static toEntity(dto: MessageDTO): MessageEntity {
    return {
      id:             dto.id,
      conversationId: dto.conversation_id,
      senderId:       dto.sender_id,
      senderName:     dto.sender_name,
      type:           dto.type as MessageEntity['type'],
      body:           dto.body,
      attachments:    dto.attachments.map(MessageMapper.toAttachment),
      reactions:      dto.reactions.map(MessageMapper.toReaction),
      replyToId:      dto.reply_to_id,
      isForwarded:    dto.is_forwarded,
      isEdited:       dto.is_edited,
      isDeleted:      dto.is_deleted,
      status:         dto.status as MessageStatus,
      createdAt:      dto.created_at,
      editedAt:       dto.edited_at,
    };
  }

  private static toAttachment(dto: AttachmentDTO): MediaAttachment {
    return {
      url:       dto.url,
      mimeType:  dto.mime_type,
      size:      dto.size,
      width:     dto.width,
      height:    dto.height,
      duration:  dto.duration,
      thumbnail: dto.thumbnail,
    };
  }

  private static toReaction(dto: ReactionDTO): MessageReaction {
    return {
      emoji:   dto.emoji,
      userIds: dto.user_ids,
      count:   dto.count,
    };
  }
}
