/** Pure string helpers. */

export const truncate = (str: string, maxLength: number): string =>
  str.length > maxLength ? `${str.slice(0, maxLength)}…` : str;

export const getInitials = (name: string): string =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');

export const formatPhoneNumber = (e164: string): string => {
  // Basic display formatting — not a validator
  if (e164.startsWith('+1') && e164.length === 12) {
    return `+1 (${e164.slice(2, 5)}) ${e164.slice(5, 8)}-${e164.slice(8)}`;
  }
  return e164;
};

export const normalizePhone = (raw: string): string =>
  raw.replace(/[^\d+]/g, '');

export const maskPhone = (e164: string): string => {
  if (e164.length < 5) return e164;
  return `${e164.slice(0, -4).replace(/\d/g, '*')}${e164.slice(-4)}`;
};

export const bytesToHumanReadable = (bytes: number): string => {
  if (bytes < 1024)         return `${bytes} B`;
  if (bytes < 1_048_576)    return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1_073_741_824)return `${(bytes / 1_048_576).toFixed(1)} MB`;
  return `${(bytes / 1_073_741_824).toFixed(1)} GB`;
};
