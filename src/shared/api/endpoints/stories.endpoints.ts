export const STORIES_ENDPOINTS = {
  feed:           '/api/v1/stories',
  myStories:      '/api/v1/stories/mine',
  story:          (id: string) => `/api/v1/stories/${id}`,
  viewers:        (id: string) => `/api/v1/stories/${id}/viewers`,
  reactions:      (id: string) => `/api/v1/stories/${id}/reactions`,
  userStories:    (userId: string) => `/api/v1/users/${userId}/stories`,
} as const;
