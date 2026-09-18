export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

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

    // Save to database
    await prisma.contactSubmission.create({
      data: { name, email, phone, subject, message },
    });

    // Send email notification
    try {
      const appUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
      let appName = 'New Hope Counseling';
      let senderEmail = 'noreply@newhopecounseling.com';
      try {
        const hostname = new URL(appUrl)?.hostname ?? '';
        appName = 'New Hope Counseling';
        senderEmail = `noreply@${hostname}`;
      } catch { /* fallback */ }

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

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION,
          subject: `New Contact Form: ${subject || 'General Inquiry'} from ${name}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'jim@tyranski.com',
          sender_email: senderEmail,
          sender_alias: appName,
        }),
      });
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Don't fail the form submission if email fails
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
