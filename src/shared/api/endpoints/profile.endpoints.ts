export const PROFILE_ENDPOINTS = {
  me:             '/api/v1/profile',
  updateMe:       '/api/v1/profile',
  avatar:         '/api/v1/profile/avatar',
  user:           (id: string) => `/api/v1/users/${id}`,
  search:         '/api/v1/users/search',
  status:         '/api/v1/profile/status',
} as const;
