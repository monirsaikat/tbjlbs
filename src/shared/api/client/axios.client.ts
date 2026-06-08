import axios from 'axios';
import { env } from '@config/env';
import { applyAuthInterceptor } from './interceptors/auth.interceptor';
import { applyErrorInterceptor } from './interceptors/error.interceptor';

export const apiClient = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
    Accept:         'application/json',
    'X-App-Version': '1.0.0',
  },
});

applyAuthInterceptor(apiClient);
applyErrorInterceptor(apiClient);
