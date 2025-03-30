import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  // Ensuring correct port for Vercel

// Configure CORS properly
const allowedOrigins = ["http://localhost:3000", "https://yourfrontend.vercel.app"];
app.use(cors({ origin: allowedOrigins, methods: "POST", credentials: true }));
app.use(express.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer Error:", error);
  } else {
    console.log("Nodemailer is ready to send emails");
  }
});

// Email sending route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email sending failed!", error });
  }
});

// Default route for testing
app.get("/", (req, res) => {
  res.send("Server is running!");
});


// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
