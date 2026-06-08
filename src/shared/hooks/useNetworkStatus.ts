import { useEffect } from 'react';
import NetInfo, { type NetInfoState } from '@react-native-community/netinfo';
import { useAppStore } from '@shared/stores';

/**
 * Syncs network status into the global app store.
 * Mount once at the app root — it registers a single listener.
 */
export const useNetworkStatus = (): void => {
  const setOnline = useAppStore((s) => s.setOnline);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setOnline(state.isConnected ?? false);
    });
    return unsubscribe;
  }, [setOnline]);
};
