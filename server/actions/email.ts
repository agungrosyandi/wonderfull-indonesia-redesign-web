"use server";

import getBaseURL from "@/lib/base-url";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const domain = getBaseURL();

// Common send email helper -------------------------

async function sendEmail(to: string, subject: string, html: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Wonderful Indonesia <${
        process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
      }>`,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Error sending email:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}

// Send 2FA email -------------------------------

export const sendTwoFactorTokenByEmail = async (
  email: string,
  token: string
) => {
  const html = `
    <div style="background-color: #f9fafb; padding: 40px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #111827;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="padding: 30px; text-align: center;">
          <h1 style="font-size: 24px; font-weight: 600; color: #1d4ed8; margin-bottom: 20px;">Your Login Code 🔐</h1>
          <p style="font-size: 16px; margin-bottom: 20px;">Use the following code to continue logging in:</p>
          <div style="display: inline-block; padding: 16px 32px; background: #1d4ed8; color: white; font-size: 28px; font-weight: bold; letter-spacing: 2px; border-radius: 8px; margin: 20px 0;">
            ${token}
          </div>
          <p style="font-size: 14px; margin-top: 20px; color: #6b7280;">This code will expire in 10 minutes.</p>
        </div>
        <div style="background: #f3f4f6; text-align: center; padding: 20px; font-size: 12px; color: #9ca3af;">
          © 2025 Wonderful Indonesia. All rights reserved.
        </div>
      </div>
    </div>
  `;

  return await sendEmail(
    email,
    "Wonderful Indonesia - Your 2 Factor Token",
    html
  );
};

// Send verification email -------------------------------

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  const html = `
    <div style="background-color: #f9fafb; padding: 40px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #111827;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="padding: 30px;">
          <h1 style="font-size: 24px; font-weight: 600; color: #1d4ed8; margin-bottom: 20px;">Welcome to Wonderful Indonesia! 🌏</h1>
          <p style="font-size: 16px; margin-bottom: 20px;">Please confirm your email address by clicking the button below. This helps us secure your account.</p>
          <a href="${confirmLink}" style="display: inline-block; padding: 14px 24px; background-color: #1d4ed8; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px;">Confirm Email</a>
          <p style="margin-top: 30px; font-size: 14px; color: #6b7280;">If you did not create this account, you can safely ignore this email.</p>
        </div>
        <div style="background: #f3f4f6; text-align: center; padding: 20px; font-size: 12px; color: #9ca3af;">
          © 2025 Wonderful Indonesia. All rights reserved.
        </div>
      </div>
    </div>
  `;

  return await sendEmail(
    email,
    "Wonderful Indonesia - Confirm your email",
    html
  );
};

// Send password reset email -------------------------------

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-password?token=${token}`;

  const html = `
    <p>Click here to <a href="${confirmLink}">Reset your password</a>.</p>
  `;

  return await sendEmail(
    email,
    "Wonderful Indonesia - Reset your password",
    html
  );
};
