export const CALLS_ENDPOINTS = {
  calls:          '/api/v1/calls',
  call:           (id: string) => `/api/v1/calls/${id}`,
  initiate:       '/api/v1/calls/initiate',
  signal:         (id: string) => `/api/v1/calls/${id}/signal`,
  end:            (id: string) => `/api/v1/calls/${id}/end`,
  history:        '/api/v1/calls/history',
} as const;
