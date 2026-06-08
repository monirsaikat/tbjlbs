/** Raw API response shapes — not exposed outside the data layer. */

export interface UserDTO {
  id:           string;
  phone_number: string;
  display_name: string;
  avatar_url:   string | null;
  status:       'online' | 'offline' | 'away';
  bio:          string | null;
  is_verified:  boolean;
  last_seen_at: string | null;
  created_at:   string;
  updated_at:   string;
}

export interface SessionDTO {
  access_token:  string;
  refresh_token: string;
  expires_at:    string;
  token_type:    'Bearer';
}

export interface AuthResponseDTO {
  user:    UserDTO;
  session: SessionDTO;
}
