// /api/contact.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    // Example: Send email via Resend or Nodemailer
    // await sendEmail({ name, email, message });
  
    return res.status(200).json({ success: true, message: "Message sent!" });
  }
  