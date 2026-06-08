/**
 * Centralised TanStack Query key factory.
 * Keys are typed tuples — use these everywhere, never inline strings.
 */
export const QUERY_KEYS = {
  auth: {
    currentUser: ['auth', 'currentUser']      as const,
    session:     ['auth', 'session']          as const,
  },
  chat: {
    conversations:   ['chat', 'conversations']                        as const,
    conversation:    (id: string)              => ['chat', 'conversations', id]         as const,
    messages:        (conversationId: string)  => ['chat', 'messages', conversationId]  as const,
    infiniteMessages:(conversationId: string)  => ['chat', 'messages', conversationId, 'infinite'] as const,
  },
  contacts: {
    all:             ['contacts']                           as const,
    contact:         (id: string) => ['contacts', id]      as const,
    blocked:         ['contacts', 'blocked']               as const,
    search:          (q: string)  => ['contacts', 'search', q] as const,
  },
  groups: {
    all:             ['groups']                                    as const,
    group:           (id: string)               => ['groups', id]         as const,
    members:         (groupId: string)          => ['groups', groupId, 'members']  as const,
  },
  profile: {
    me:              ['profile', 'me']                          as const,
    user:            (id: string) => ['profile', 'user', id]   as const,
    search:          (q: string)  => ['profile', 'search', q]  as const,
  },
  calls: {
    history:         ['calls', 'history']                       as const,
    call:            (id: string) => ['calls', id]              as const,
  },
  stories: {
    feed:            ['stories', 'feed']                              as const,
    mine:            ['stories', 'mine']                             as const,
    user:            (userId: string) => ['stories', 'user', userId] as const,
    viewers:         (storyId: string) => ['stories', storyId, 'viewers'] as const,
  },
} as const;
