import type { ConversationEntity, ParticipantEntity } from '../../domain/entities';
import type { ConversationDTO, ParticipantDTO }        from '../dto';

export class ConversationMapper {
  static toEntity(dto: ConversationDTO): ConversationEntity {
    return {
      id:           dto.id,
      type:         dto.type,
      name:         dto.name,
      avatarUrl:    dto.avatar_url,
      participants: dto.participants.map(ConversationMapper.toParticipantEntity),
      lastMessage:  dto.last_message
        ? {
            id:         dto.last_message.id,
            body:       dto.last_message.body,
            senderName: dto.last_message.sender_name,
            sentAt:     dto.last_message.sent_at,
          }
        : null,
      unreadCount:  dto.unread_count,
      isPinned:     dto.is_pinned,
      isMuted:      dto.is_muted,
      isArchived:   dto.is_archived,
      createdAt:    dto.created_at,
      updatedAt:    dto.updated_at,
    };
  }

  static toParticipantEntity(dto: ParticipantDTO): ParticipantEntity {
    return {
      userId:      dto.user_id,
      displayName: dto.display_name,
      avatarUrl:   dto.avatar_url,
      role:        dto.role,
      joinedAt:    dto.joined_at,
    };
  }
}
