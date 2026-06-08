import { z } from 'zod';

export const sendOTPSchema = z.object({
  phoneNumber: z.string().regex(/^\+[1-9]\d{6,14}$/),
});

export const verifyOTPSchema = z.object({
  phoneNumber: z.string().regex(/^\+[1-9]\d{6,14}$/),
  otp:         z.string().length(6).regex(/^\d+$/, 'OTP must be 6 digits'),
});

export const registerSchema = z.object({
  phoneNumber:    z.string().regex(/^\+[1-9]\d{6,14}$/),
  displayName:    z.string().min(2).max(50),
  otp:            z.string().length(6),
});

export type SendOTPInput    = z.infer<typeof sendOTPSchema>;
export type VerifyOTPInput  = z.infer<typeof verifyOTPSchema>;
export type RegisterInput   = z.infer<typeof registerSchema>;
