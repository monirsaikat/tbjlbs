import type { CallEntity, CallType } from '../entities/Call.entity';
import type { PaginatedResponse, PaginationParams } from '@shared/types/api.types';

export interface ICallRepository {
  getCallHistory(params?: PaginationParams): Promise<PaginatedResponse<CallEntity>>;
  initiateCall(conversationId: string, type: CallType): Promise<CallEntity>;
  endCall(callId: string): Promise<void>;
  declineCall(callId: string): Promise<void>;
}
