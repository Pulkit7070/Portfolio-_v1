import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await resend.emails.send({
        from: "prateeksaraf9@gmail.com", // Use your verified sender email
        to: "pulkitsaraf.dev@gmail.com", // Update the recipient email
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      // Send a successful response
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      // Send a failure response
      res.status(500).json({ success: false, message: "Email sending failed!", error: error.message });
    }
  } else {
    // If method is not POST
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
