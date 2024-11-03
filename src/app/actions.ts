'use server';
import 'server-only';
import { headers } from 'next/headers';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/contact-template';
import { actionClient, ActionError } from '@/lib/safe-action';
import { ContactActionSchema } from '@/lib/validators';

const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export const contactSubmit = actionClient
  .use(async ({ next, clientInput }) => {
    const { token } = clientInput as { token: string };
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';

    if (!token) {
      throw new ActionError('Captcha token is required');
    }

    const formData = new URLSearchParams();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY!);
    formData.append('response', token);
    formData.append('remoteip', ip);

    try {
      const res = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const data = await res.json();
      
      if (!data.success) {
        console.error('Turnstile validation failed:', data);
        throw new ActionError(data['error-codes']?.join(', ') || 'Captcha validation failed');
      }

      return next();
    } catch (error) {
      console.error('Turnstile validation error:', error);
      throw new ActionError('Failed to validate captcha');
    }
  })
  .schema(ContactActionSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    if (!EMAIL_FROM || !EMAIL_TO) {
      throw new ActionError('Contact form configuration missing');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: `Message from ${name} on Portfolio`,
        react: ContactEmail({ name, email, message })
      });

      if (error) {
        throw new ActionError('Failed to send email');
      }

      return {
        success: 'Thank you for reaching out! Your message has been sent.'
      };
    } catch (error) {
      console.error('Email sending error:', error);
      throw new ActionError('Failed to process your request');
    }
  });