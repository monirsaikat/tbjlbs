import type { GroupEntity, GroupMemberEntity } from '../entities/Group.entity';
import type { GroupMemberRole } from '../entities/GroupMember.entity';
import type { PaginatedResponse, PaginationParams } from '@shared/types/api.types';

export interface CreateGroupInput {
  name:         string;
  description?: string;
  memberIds:    string[];
}

export interface IGroupRepository {
  getGroups(params?: PaginationParams): Promise<PaginatedResponse<GroupEntity>>;
  getGroup(id: string): Promise<GroupEntity>;
  createGroup(input: CreateGroupInput): Promise<GroupEntity>;
  updateGroup(id: string, data: Partial<Pick<GroupEntity, 'name' | 'description' | 'avatarUrl'>>): Promise<GroupEntity>;
  deleteGroup(id: string): Promise<void>;
  getMembers(groupId: string): Promise<GroupMemberEntity[]>;
  addMember(groupId: string, userId: string): Promise<void>;
  removeMember(groupId: string, userId: string): Promise<void>;
  setMemberRole(groupId: string, userId: string, role: GroupMemberRole): Promise<void>;
  leaveGroup(groupId: string): Promise<void>;
  joinViaInviteLink(token: string): Promise<GroupEntity>;
}
