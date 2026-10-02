import { saveContact } from "../lib/saveContact.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const result = await saveContact(req.body, process.env.MONGODB_URI);
  res.status(result.status).json(result.body);
}
