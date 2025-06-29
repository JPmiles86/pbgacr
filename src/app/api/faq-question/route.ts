import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, question, notify } = body

    // Create email content for FAQ question
    const emailContent = `
New FAQ Question Submission from PBAG Website

Name: ${name}
Email: ${email}
Notify when added to FAQ: ${notify ? 'Yes' : 'No'}

Question:
${question}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Log the question for now (in production, you'd send emails or save to database)
    console.log('FAQ Question Submission:', emailContent)

    // If email is configured, send the question
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = require('nodemailer')
      
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      // Send to admin
      const testEmail = 'jpmiles86@gmail.com'
      const prodEmail = 'info@pbagcr.com'
      const recipientEmail = process.env.NODE_ENV === 'production' ? prodEmail : testEmail

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: recipientEmail,
        subject: `New FAQ Question - ${name}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      })

      // Send confirmation to user
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for your FAQ question - PBAG',
        text: `
Dear ${name},

Thank you for submitting your question to our FAQ. We have received your inquiry:

"${question}"

Our team will review your question and get back to you with an answer. ${notify ? 'We will also notify you if we add this question to our public FAQ.' : ''}

Best regards,
PBAG Team
        `,
        html: `
<h2>Thank you for your FAQ question</h2>
<p>Dear ${name},</p>
<p>Thank you for submitting your question to our FAQ. We have received your inquiry:</p>
<blockquote style="border-left: 4px solid #f59e0b; padding-left: 16px; margin: 16px 0; font-style: italic;">
"${question}"
</blockquote>
<p>Our team will review your question and get back to you with an answer. ${notify ? 'We will also notify you if we add this question to our public FAQ.' : ''}</p>
<p>Best regards,<br>PBAG Team</p>
        `
      })
    }

    return NextResponse.json(
      { message: 'Question submitted successfully! We will review it and get back to you.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('FAQ question submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit question. Please try again.' },
      { status: 500 }
    )
  }
}