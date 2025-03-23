import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vipidevelopment1@gmail.com",
      subject: "From My Website",
      html: `
       <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
          .container { max-width: 600px; background: white; padding: 20px; border-radius: 8px; 
            box-shadow: 0 0 10px rgba(0,0,0,0.1); margin: auto; }
          .header { background: #007bff; color: white; text-align: center; padding: 15px; 
            font-size: 20px; border-radius: 8px 8px 0 0; }
          .content { padding: 20px; font-size: 16px; color: #333; }
          .footer { text-align: center; font-size: 14px; color: #777; padding-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">New Contact Message</div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>Sent via Vipisanan.me</p>
          </div>
        </div>
      </body>
      </html>
      `,
    });

    return res.status(200).json({ success: true, data: emailResponse });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error?.message });
  }
}
