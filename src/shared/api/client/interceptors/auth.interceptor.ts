import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@shared/stores/auth.store';

export const applyAuthInterceptor = (client: AxiosInstance): void => {
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const session = useAuthStore.getState().session;
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
};
