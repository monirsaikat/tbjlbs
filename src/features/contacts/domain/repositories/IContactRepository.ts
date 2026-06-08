import type { ContactEntity } from '../entities/Contact.entity';
import type { PaginatedResponse, PaginationParams } from '@shared/types/api.types';

export interface IContactRepository {
  getContacts(params?: PaginationParams): Promise<PaginatedResponse<ContactEntity>>;
  syncContacts(phoneNumbers: string[]): Promise<ContactEntity[]>;
  blockContact(userId: string): Promise<void>;
  unblockContact(userId: string): Promise<void>;
  getBlockedContacts(): Promise<ContactEntity[]>;
  searchContacts(query: string): Promise<ContactEntity[]>;
}
