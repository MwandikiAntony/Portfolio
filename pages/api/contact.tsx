import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import validator from 'validator';

// --- Rate Limiter Setup (limits: 5 requests / 10 minutes per IP)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  handler: (_req, res) => {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  },
});

// --- Helper to run middleware inside Next.js API
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, limiter);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // --- Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // --- Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // --- Email Template (HTML)
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

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `📩 New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Email failed to send. Please try again later.' });
  }
}
