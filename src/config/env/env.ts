/**
 * Runtime environment configuration.
 *
 * Values are injected at build time via react-native-config (.env.*).
 * Never import process.env directly — always use this module.
 */
import Config from 'react-native-config';
import { z } from 'zod';

const envSchema = z.object({
  API_BASE_URL:      z.string().url(),
  WS_URL:            z.string().url(),
  APP_ENV:           z.enum(['development', 'staging', 'production']),
  SENTRY_DSN:        z.string().optional(),
  VAPID_PUBLIC_KEY:  z.string().optional(),
});

export type AppEnv = z.infer<typeof envSchema>;

const parsed = envSchema.safeParse({
  API_BASE_URL:     Config.API_BASE_URL,
  WS_URL:           Config.WS_URL,
  APP_ENV:          Config.APP_ENV,
  SENTRY_DSN:       Config.SENTRY_DSN,
  VAPID_PUBLIC_KEY: Config.VAPID_PUBLIC_KEY,
});

if (!parsed.success) {
  throw new Error(`[Env] Invalid environment variables:\n${parsed.error.message}`);
}

export const env: AppEnv = parsed.data;

export const isDev        = env.APP_ENV === 'development';
export const isStaging    = env.APP_ENV === 'staging';
export const isProduction = env.APP_ENV === 'production';
