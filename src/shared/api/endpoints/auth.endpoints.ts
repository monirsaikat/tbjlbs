export const AUTH_ENDPOINTS = {
  sendOTP:     '/api/v1/auth/send-otp',
  verifyOTP:   '/api/v1/auth/verify-otp',
  register:    '/api/v1/auth/register',
  login:       '/api/v1/auth/login',
  logout:      '/api/v1/auth/logout',
  refresh:     '/api/v1/auth/refresh',
  me:          '/api/v1/auth/me',
} as const;
