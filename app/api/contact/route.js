import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, subject, message } = await req.json();

    if (!name || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Configure email transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // App password (not normal password)
      },
    });

    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "vipivipisanan@gmail.com",
      subject: `New Message from ${name}: ${subject}`,
      text: `Name: ${name}\nSubject: ${subject}\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
