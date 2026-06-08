import { useEffect, useRef } from 'react';
import { AppState, type AppStateStatus } from 'react-native';

type AppStateChangeHandler = (status: AppStateStatus) => void;

export const useAppState = (onChange: AppStateChangeHandler): void => {
  const handlerRef = useRef(onChange);
  handlerRef.current = onChange;

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (status) => {
      handlerRef.current(status);
    });
    return () => subscription.remove();
  }, []);
};
