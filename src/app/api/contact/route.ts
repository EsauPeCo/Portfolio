import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { validateContactData } from '@/lib/validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error('❌ CONTACT_TO_EMAIL is not configured');
      return NextResponse.json(
        { success: false, error: 'Email recipient is not configured' },
        { status: 500 }
      );
    }

    const body = await req.json();
    
    // Validate using shared schema
    const validation = await validateContactData(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data!;

    // Use environment variables for email configuration
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <noreply@resend.dev>';
    const toEmail = process.env.CONTACT_TO_EMAIL;

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email, // reply directly to the person
      subject: `💼 New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Portfolio Message</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #495057; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Contact Details</h2>
              <p style="margin: 8px 0;"><strong style="color: #6c757d;">Name:</strong> <span style="color: #212529;">${name}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #6c757d;">Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #495057; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Message</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #007bff;">
                <p style="margin: 0; color: #212529; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 6px; border-left: 4px solid #007bff;">
              <p style="margin: 0; color: #0056b3; font-size: 14px;">
                💡 <strong>Tip:</strong> Click the email address above to reply directly to ${name}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
            <p>This message was sent from your portfolio contact form</p>
          </div>
        </div>
      `,
      // Also include a plain text version for better deliverability
      text: `
New Portfolio Message from ${name}

Contact Details:
Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form.
You can reply directly to this email to contact ${name}.
      `.trim(),
    });

    console.log('✅ Email sent successfully:', data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });

  } catch (error) {
    console.error('❌ Email send error:', error);
    
    // Return a user-friendly error message
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email. Please try again later or contact me directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 