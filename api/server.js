import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Email sending failed!" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
