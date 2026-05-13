import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Railway Variables-dan gələn API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'GX Global <info@gx-global.com>', // Resend-də domaini təsdiqlədikdən sonra 'info@gx-global.com' edə bilərsən
      to: ['info@gx-global.com'],
      replyTo: email,
      subject: `Saytdan Mesaj: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
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

    if (error) {
      console.error('RESEND_XETASI:', error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('SERVER_XETASI:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}