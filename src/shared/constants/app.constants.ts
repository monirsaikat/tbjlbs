export const APP_NAME = 'MessengerApp';

export const PAGINATION = {
  DEFAULT_PAGE:     1,
  DEFAULT_PER_PAGE: 20,
  MESSAGES_PER_PAGE: 50,
} as const;

export const TIMEOUTS = {
  API_REQUEST_MS:   30_000,
  WS_RECONNECT_MS:  3_000,
  TYPING_DEBOUNCE:  500,
  SEARCH_DEBOUNCE:  300,
} as const;

export const MEDIA = {
  MAX_IMAGE_SIZE_MB:    25,
  MAX_VIDEO_SIZE_MB:    100,
  MAX_FILE_SIZE_MB:     100,
  ALLOWED_IMAGE_TYPES:  ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  ALLOWED_VIDEO_TYPES:  ['video/mp4', 'video/mov', 'video/avi'],
  THUMBNAIL_SIZE:       { width: 320, height: 320 },
} as const;

export const OTP = {
  LENGTH:       6,
  EXPIRY_SEC:   300,
  RESEND_SEC:   60,
} as const;

export const GROUP = {
  MAX_MEMBERS:       1024,
  MAX_ADMINS:        16,
  MAX_NAME_LENGTH:   100,
  MAX_DESC_LENGTH:   512,
} as const;

export const MESSAGE = {
  MAX_TEXT_LENGTH:   65_536,
  MAX_CAPTION_LENGTH: 1_024,
} as const;
