export const CONTACTS_ENDPOINTS = {
  contacts:    '/api/v1/contacts',
  contact:     (id: string) => `/api/v1/contacts/${id}`,
  sync:        '/api/v1/contacts/sync',
  block:       (id: string) => `/api/v1/contacts/${id}/block`,
  unblock:     (id: string) => `/api/v1/contacts/${id}/unblock`,
  blocked:     '/api/v1/contacts/blocked',
} as const;
