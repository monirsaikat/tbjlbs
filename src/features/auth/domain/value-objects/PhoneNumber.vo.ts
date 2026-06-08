import { z } from 'zod';

/** E.164 phone number format: +[country][number], 7–15 digits */
export const phoneNumberSchema = z
  .string()
  .regex(/^\+[1-9]\d{6,14}$/, 'Invalid phone number — use E.164 format (e.g. +15551234567)');

export type PhoneNumber = z.infer<typeof phoneNumberSchema>;

export const parsePhoneNumber = (raw: string): PhoneNumber =>
  phoneNumberSchema.parse(raw);
