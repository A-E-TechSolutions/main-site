import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
  logger: true,
  debug: true
});

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail({
      from: 'noreply@aetechsolutions.net',
      to: 'info@aetechsolutions.net',
      subject: 'DKIM Test Email',
      text: 'This is a test email to verify DKIM configuration.',
      html: '<p>This is a test email to verify DKIM configuration.</p>',
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    });
    
    console.log('Test email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

sendTestEmail();