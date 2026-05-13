import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'mail.gx-global.com', // Cpanel SMTP serveri
      port: 465,
      secure: true,
      auth: {
        user: 'info@gx-global.com', 
        pass: process.env.EMAIL_PASSWORD, // DİQQƏT: Bura info@gx-global.com-un real şifrəsini yazmalısınız
      },
    });

    await transporter.sendMail({
      from: 'info@gx-global.com',
      to: 'info@gx-global.com', // Mail bura gələcək
      replyTo: email, // Siz cavabla deyəndə müştərinin mailinə gedəcək
      subject: `Saytdan yeni mesaj: ${subject}`,
      html: `
        <h2>Yeni Əlaqə Formu Mesajı</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Qeyd olunmayıb'}</p>
        <p><strong>Mövzu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong><br/> ${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail xətası:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}