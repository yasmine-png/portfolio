import { Request, Response } from "express";
import nodemailer from "nodemailer";
import 'dotenv/config';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // Check for required env vars
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        success: false,
        message: "Email configuration not set. Please contact the administrator."
      });
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true,
      logger: true
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'yboukraiem@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Message</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Message sent successfully!"
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: (error as Error).message || "Failed to send message. Please try again later."
    });
  }
}
