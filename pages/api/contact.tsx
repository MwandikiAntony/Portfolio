import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import validator from 'validator';

const rateLimitWindow = 10 * 60 * 1000; // 10 minutes
const maxRequests = 5;
const requests = new Map<string, number[]>();

function rateLimiter(req: NextApiRequest, res: NextApiResponse) {
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';

  const now = Date.now();
  const timestamps = requests.get(ip) || [];
  const filtered = timestamps.filter((time) => now - time < rateLimitWindow);

  if (filtered.length >= maxRequests) {
    res.status(429).json({ error: 'Too many requests. Please try again later.' });
    return false;
  }

  filtered.push(now);
  requests.set(ip, filtered);
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!rateLimiter(req, res)) return;

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: 'All fields are required.' });

  if (!validator.isEmail(email))
    return res.status(400).json({ error: 'Invalid email address.' });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
    <h2 style="color: #2563eb;">New Contact Form Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <div style="padding: 10px; background-color: #ffffff; border-radius: 6px; border: 1px solid #e5e7eb;">
      ${message.replace(/\n/g, '<br>')}
    </div>
    <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
      Sent from your portfolio contact form.
    </p>
  </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `📩 New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Email failed to send. Please try again later.' });
  }
}
