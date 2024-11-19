import nodemailer from 'nodemailer';
import logger from './logger.js';

export function createTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: 'TLSv1.2'
    },
    dkim: {
      domainName: 'aetechsolutions.net',
      keySelector: 'hostingermail1',
      privateKey: process.env.DKIM_PRIVATE_KEY // Hostinger handles DKIM signing automatically
    }
  });

  return transporter;
}

export async function sendEmail({ name, email, message }) {
  const transporter = createTransporter();

  try {
    logger.info('Verifying SMTP connection...');
    await transporter.verify();
    
    const mailOptions = {
      from: {
        name: `${name} via AE Tech Solutions`,
        address: process.env.EMAIL_FROM
      },
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info('Email sent successfully', { messageId: info.messageId });
    return info;
  } catch (error) {
    logger.error('Failed to send email', { 
      error: error.message,
      code: error.code,
      command: error.command
    });
    throw error;
  }
}