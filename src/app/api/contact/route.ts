import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      phone,
      company,
      service,
      urgency,
      preferredContact,
      budget,
      message
    } = body

    // Create email content
    const emailContent = `
New Contact Form Submission from PBAG Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Service Interested: ${service || 'Not specified'}
Urgency: ${urgency || 'Not specified'}
Preferred Contact: ${preferredContact || 'Email'}
Budget: ${budget || 'Not specified'}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Check if email configuration is available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Contact form submission:', emailContent)
      return NextResponse.json(
        { message: 'Message received successfully! We will get back to you soon. (Email configuration pending)' },
        { status: 200 }
      )
    }

    // Configure email service
    const nodemailer = require('nodemailer')
    
    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Test email configuration - send to jpmiles86@gmail.com for testing
    const testEmail = 'jpmiles86@gmail.com'
    const prodEmail = 'info@pbagcr.com'
    const recipientEmail = process.env.NODE_ENV === 'production' ? prodEmail : testEmail

    await transporter.sendMail({
      from: process.env.SMTP_USER || 'noreply@pbagcr.com',
      to: recipientEmail,
      subject: `New Contact Form Submission - ${name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    })

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'noreply@pbagcr.com',
      to: email,
      subject: 'Thank you for contacting PBAG - Confirmation',
      text: `
Dear ${name},

Thank you for contacting Pacific Business & Accounting Group. We have received your inquiry and will get back to you within 24 hours.

Your message: ${message}

Best regards,
PBAG Team
      `,
      html: `
<h2>Thank you for contacting PBAG</h2>
<p>Dear ${name},</p>
<p>Thank you for contacting Pacific Business & Accounting Group. We have received your inquiry and will get back to you within 24 hours.</p>
<p><strong>Your message:</strong> ${message}</p>
<p>Best regards,<br>PBAG Team</p>
      `
    })

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}