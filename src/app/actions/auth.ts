"use server";

import { cookies } from 'next/headers';
import { signSession } from '@/lib/session';

export async function authenticateAdmin(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  // Strict requirement: Environment variable only.
  const validUsername = process.env.ADMIN_USERNAME as string;
  const validPassword = process.env.ADMIN_PASSWORD as string;

  if (!validUsername || !validPassword) {
    console.error('CRITICAL WARNING: ADMIN_USERNAME or ADMIN_PASSWORD is not set in the environment.');
    return { success: false, error: 'SERVER_CONFIGURATION_ERROR: Authentication not configured.' };
  }

  if (username === validUsername && password === validPassword) {
    // Generate a secure, signed token valid for 24 hours
    const token = signSession({
      role: 'admin',
      exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
    });

    const cookieStore = await cookies();
    cookieStore.set('dp_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 24 * 60 * 60 // 24 hours
    });

    return { success: true };
  }

  return { success: false, error: 'AUTHENTICATION_FAILED: ACCESS_DENIED' };
}
