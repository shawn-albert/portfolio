'use server';
import 'server-only';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/contact-template';
import { validateTurnstileToken } from '@/lib/turnstile';
import { actionClient, ActionError } from '@/lib/safe-action';
import { ContactActionSchema } from '@/lib/validators';

const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export const contactSubmit = actionClient
  .use(async ({ next, clientInput }) => {
    const { token } = clientInput as { token: string };

    if (!token) {
      throw new ActionError('Captcha token is required');
    }

    const validationResponse = await validateTurnstileToken(token);

    if (!validationResponse.success) {
      throw new ActionError('Invalid captcha token');
    }

    return next();
  })
  .schema(ContactActionSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    if (!EMAIL_FROM || !EMAIL_TO) {
      throw new ActionError('Contact form configuration missing');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data: res, error } = await resend.emails.send({
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
      throw new ActionError('Failed to process your request');
    }
  });