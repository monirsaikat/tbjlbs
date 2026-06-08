export interface SessionEntity {
  readonly accessToken:  string;
  readonly refreshToken: string;
  readonly expiresAt:    string;   // ISO 8601
  readonly tokenType:    'Bearer';
}
