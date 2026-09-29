export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.();

    const name = data?.name ?? '';
    const email = data?.email ?? '';
    const phone = data?.phone ?? '';
    const subject = data?.subject ?? '';
    const message = data?.message ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Send notification via email or SMS based on configuration
    try {
      const sendViaEmail = process.env.SEND_VIA_EMAIL === 'true';
      const sendViaSMS = process.env.SEND_VIA_SMS === 'true';

      if (sendViaEmail) {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        const htmlBody = `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
            <div style="background: #1E2D3A; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
              <h2 style="color: #C4A265; margin: 0; font-family: Georgia, serif;">New Hope Counseling Ltd.</h2>
              <p style="color: #8DA8C0; margin: 5px 0 0; font-size: 14px;">New Contact Form Submission</p>
            </div>
            <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
              ${subject ? `<p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>` : ''}
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <div style="background: #f0f4f7; padding: 15px; border-radius: 4px; border-left: 4px solid #C4A265;">
                ${message?.replace?.(/\n/g, '<br/>') ?? message}
              </div>
              <p style="color: #999; font-size: 12px; margin-top: 20px;">
                Submitted at: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `;

        const emailRecipients = (process.env.EMAIL_RECIPIENT || 'newhope@counselingmail.com')
          .split(',')
          .map((e) => e.trim())
          .filter((e) => e);

        for (const recipient of emailRecipients) {
          try {
            await resend.emails.send({
              from: 'onboarding@resend.dev',
              to: recipient,
              subject: `New Contact Form: ${subject || 'General Inquiry'} from ${name}`,
              html: htmlBody,
            });
            console.log(`Email sent to ${recipient}`);
          } catch (emailError) {
            console.error(`Failed to send email to ${recipient}:`, emailError);
          }
        }
      }

      if (sendViaSMS) {
        const smsProvider = process.env.SMS_PROVIDER || 'twilio';
        const smsBody = `New contact from ${name}. Email: ${email}. Message: ${message.substring(0, 100)}`;
        const smsRecipients = (process.env.SMS_RECIPIENT || '+12245176234')
          .split(',')
          .map((s) => s.trim())
          .filter((s) => s);

        if (smsProvider === 'sinch') {
          const projectId = process.env.SINCH_PROJECT_ID;
          const appId = process.env.SINCH_APP_ID;
          const accessKeyId = process.env.SINCH_ACCESS_KEY_ID;
          const keySecret = process.env.SINCH_KEY_SECRET;
          const sinchPhoneNumber = process.env.SINCH_PHONE_NUMBER;

          const credentials = Buffer.from(`${accessKeyId}:${keySecret}`).toString('base64');

          for (const recipient of smsRecipients) {
            try {
              console.log('Sending SMS via Sinch to:', recipient);
              const response = await fetch(
                `https://US.conversation.api.sinch.com/v1/projects/${projectId}/messages:send`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${credentials}`,
                  },
                  body: JSON.stringify({
                    app_id: appId,
                    recipient: {
                      identified_by: {
                        channel_identities: [
                          {
                            channel: 'SMS',
                            identity: recipient,
                          },
                        ],
                      },
                    },
                    message: {
                      text_message: {
                        text: smsBody,
                      },
                    },
                    channel_properties: {
                      SMS_SENDER: sinchPhoneNumber,
                    },
                  }),
                }
              );

              const data = await response.json();
              if (!response.ok) {
                throw new Error(`Sinch API error: ${response.status} - ${JSON.stringify(data)}`);
              }
              console.log(`SMS sent via Sinch to ${recipient}:`, data);
            } catch (smsError) {
              console.error(`Failed to send SMS to ${recipient} via Sinch:`, smsError);
            }
          }
        } else {
          const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

          for (const recipient of smsRecipients) {
            try {
              console.log('Sending SMS via Twilio to:', recipient);
              const msgResponse = await client.messages.create({
                body: smsBody,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: recipient,
              });
              console.log(`SMS sent via Twilio to ${recipient} with SID:`, msgResponse.sid);
            } catch (smsError) {
              console.error(`Failed to send SMS to ${recipient} via Twilio:`, smsError);
            }
          }
        }
      }
    } catch (notificationError) {
      console.error('Notification error:', notificationError);
      // Don't fail the form submission if notification fails
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
