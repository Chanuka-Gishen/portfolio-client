import nodemailer from "nodemailer";

const rateLimit = new Map(); // { ip: { count, lastRequest } }

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, contactNo, email, message } = body;

    const ip = req.headers.get("x-forwarded-for") || "unknown"; // get client IP
    const now = Date.now();

    // rate limit window: 1 hour, max 5 requests
    const WINDOW = 60 * 60 * 1000;
    const LIMIT = 5;

    const entry = rateLimit.get(ip) || { count: 0, lastRequest: now };

    if (now - entry.lastRequest > WINDOW) {
      entry.count = 1;
      entry.lastRequest = now;
    } else {
      entry.count += 1;
      entry.lastRequest = now;
    }

    rateLimit.set(ip, entry);

    if (entry.count > LIMIT) {
      return new Response(
        JSON.stringify({ success: false, error: "Too many requests" }),
        { status: 429 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USR_NAME,
        pass: process.env.SMTP_PWD,
      },
    });

    // send mail
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USR_NAME}>`,
      to: process.env.SMTP_USR_NAME,
      subject: `Portfolio - New message from ${name} ..!`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Contact Number:</b> ${contactNo}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
