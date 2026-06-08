const palette = {
  emerald: { 50:'#ecfdf5', 100:'#d1fae5', 200:'#a7f3d0', 400:'#34d399', 500:'#10b981', 600:'#059669', 700:'#047857', 900:'#064e3b' },
  neutral: { 0:'#ffffff', 50:'#f9fafb', 100:'#f3f4f6', 200:'#e5e7eb', 300:'#d1d5db', 400:'#9ca3af', 500:'#6b7280', 600:'#4b5563', 700:'#374151', 800:'#1f2937', 850:'#18212f', 900:'#111827', 950:'#0a0f1a', 1000:'#000000' },
  red:     { 400:'#f87171', 500:'#ef4444', 600:'#dc2626' },
  amber:   { 400:'#fbbf24', 500:'#f59e0b' },
  blue:    { 400:'#60a5fa', 500:'#3b82f6', 600:'#2563eb' },
} as const;

export interface ColorScheme {
  // Brand
  primary:      string;
  primaryMuted: string;
  // Backgrounds
  background:   string;
  surface:      string;
  surfaceRaised:string;
  overlay:      string;
  // Text
  textPrimary:  string;
  textSecondary:string;
  textDisabled: string;
  textInverse:  string;
  textLink:     string;
  // Borders
  border:       string;
  borderFocus:  string;
  borderStrong: string;
  // Semantic
  error:        string;
  success:      string;
  warning:      string;
  info:         string;
  // Chat-specific
  messageSent:      string;
  messageReceived:  string;
  messageSentText:  string;
  // Status
  statusOnline:  string;
  statusOffline: string;
  statusAway:    string;
  // Misc
  divider:      string;
  skeleton:     string;
}

export const lightColors: ColorScheme = {
  primary:       palette.emerald[500],
  primaryMuted:  palette.emerald[50],
  background:    palette.neutral[0],
  surface:       palette.neutral[50],
  surfaceRaised: palette.neutral[100],
  overlay:       'rgba(0,0,0,0.4)',
  textPrimary:   palette.neutral[900],
  textSecondary: palette.neutral[500],
  textDisabled:  palette.neutral[400],
  textInverse:   palette.neutral[0],
  textLink:      palette.blue[600],
  border:        palette.neutral[200],
  borderFocus:   palette.emerald[500],
  borderStrong:  palette.neutral[400],
  error:         palette.red[500],
  success:       palette.emerald[500],
  warning:       palette.amber[500],
  info:          palette.blue[500],
  messageSent:      palette.emerald[500],
  messageReceived:  palette.neutral[100],
  messageSentText:  palette.neutral[0],
  statusOnline:  '#22c55e',
  statusOffline: palette.neutral[400],
  statusAway:    palette.amber[400],
  divider:       palette.neutral[100],
  skeleton:      palette.neutral[200],
};

export const darkColors: ColorScheme = {
  primary:       palette.emerald[400],
  primaryMuted:  '#0d2e20',
  background:    palette.neutral[950],
  surface:       palette.neutral[900],
  surfaceRaised: palette.neutral[850],
  overlay:       'rgba(0,0,0,0.6)',
  textPrimary:   palette.neutral[50],
  textSecondary: palette.neutral[400],
  textDisabled:  palette.neutral[600],
  textInverse:   palette.neutral[900],
  textLink:      palette.blue[400],
  border:        palette.neutral[800],
  borderFocus:   palette.emerald[400],
  borderStrong:  palette.neutral[600],
  error:         palette.red[400],
  success:       palette.emerald[400],
  warning:       palette.amber[400],
  info:          palette.blue[400],
  messageSent:      palette.emerald[700],
  messageReceived:  palette.neutral[800],
  messageSentText:  palette.neutral[0],
  statusOnline:  '#4ade80',
  statusOffline: palette.neutral[600],
  statusAway:    palette.amber[400],
  divider:       palette.neutral[800],
  skeleton:      palette.neutral[800],
};
