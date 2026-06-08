export const GROUPS_ENDPOINTS = {
  groups:         '/api/v1/groups',
  group:          (id: string) => `/api/v1/groups/${id}`,
  members:        (id: string) => `/api/v1/groups/${id}/members`,
  member:         (groupId: string, userId: string) => `/api/v1/groups/${groupId}/members/${userId}`,
  leave:          (id: string) => `/api/v1/groups/${id}/leave`,
  admins:         (id: string) => `/api/v1/groups/${id}/admins`,
  inviteLink:     (id: string) => `/api/v1/groups/${id}/invite-link`,
  joinViaLink:    (token: string) => `/api/v1/groups/join/${token}`,
} as const;
