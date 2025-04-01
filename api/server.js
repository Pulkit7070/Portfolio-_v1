import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await resend.emails.send({
        from: "prateeksaraf9@gmail.com", // Use your verified sender email
        to: "pulkitsaraf.dev@gmail.com",
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
