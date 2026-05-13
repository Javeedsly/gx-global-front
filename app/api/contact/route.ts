import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Zoho Mail SMTP Ayarları
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com', // Avropa üçün 'smtp.zoho.eu' ola bilər
      port: 465,
      secure: true, // SSL üçün true
      auth: {
        user: 'info@gx-global.com',
        // Railway Variables-dan gələn App Password
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    // Mailin tərkibi
    await transporter.sendMail({
      from: 'info@gx-global.com',
      to: 'info@gx-global.com',
      replyTo: email,
      subject: `Saytdan Mesaj: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #065f46;">Yeni Əlaqə Mesajı</h2>
          <p><strong>Ad:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Qeyd edilməyib'}</p>
          <p><strong>Mövzu:</strong> ${subject}</p>
          <hr />
          <p><strong>Mesaj:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    // Railway Logs hissəsində xətanı görmək üçün:
    console.error('MAIL_XETASI:', error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}