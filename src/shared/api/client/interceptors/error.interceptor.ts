import type { AxiosInstance, AxiosError } from 'axios';
import type { ApiError } from '@shared/types/api.types';

export const applyErrorInterceptor = (client: AxiosInstance): void => {
  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<ApiError>) => {
      const status = error.response?.status;

      if (status === 401) {
        // Token refresh is handled by a dedicated refresh interceptor
        // added in the auth feature bootstrap — not here.
      }

      if (status === 422) {
        return Promise.reject({
          message:  error.response?.data?.message ?? 'Validation failed',
          errors:   error.response?.data?.errors ?? {},
          status:   422,
        } satisfies ApiError);
      }

      return Promise.reject({
        message: error.response?.data?.message ?? error.message,
        status:  status ?? 0,
      } satisfies ApiError);
    },
  );
};
