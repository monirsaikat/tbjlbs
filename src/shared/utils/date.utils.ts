/** Pure date helpers — no side effects, no external state. */

export const formatMessageTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatConversationDate = (isoString: string): string => {
  const date  = new Date(isoString);
  const now   = new Date();
  const diff  = now.getTime() - date.getTime();
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return formatMessageTime(isoString);
  if (days === 1) return 'Yesterday';
  if (days < 7)  return date.toLocaleDateString([], { weekday: 'short' });
  return date.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });
};

export const isToday = (isoString: string): boolean => {
  const date = new Date(isoString);
  const now  = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth()    === now.getMonth() &&
    date.getDate()     === now.getDate()
  );
};

export const toISOString = (date: Date): string => date.toISOString();

export const secondsToMMSS = (seconds: number): string => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};
