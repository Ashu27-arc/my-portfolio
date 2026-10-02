import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

let connecting;

async function connect(uri) {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  if (mongoose.connection.readyState === 1) return;
  if (!connecting) {
    connecting = mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
  }
  try {
    await connecting;
  } catch (error) {
    connecting = undefined;
    throw error;
  }
}

export async function saveContact({ name, email, message } = {}, mongoUri) {
  const trimmed = {
    name: typeof name === "string" ? name.trim() : "",
    email: typeof email === "string" ? email.trim() : "",
    message: typeof message === "string" ? message.trim() : "",
  };

  if (!trimmed.name || !trimmed.email || !trimmed.message) {
    return {
      status: 400,
      body: { success: false, message: "All fields are required" },
    };
  }

  try {
    await connect(mongoUri);
    await Contact.create(trimmed);
    return {
      status: 200,
      body: { success: true, message: "Message sent successfully!" },
    };
  } catch (error) {
    console.error("Error saving contact:", error.message);
    return {
      status: 500,
      body: {
        success: false,
        message: "Failed to send message. Please try again.",
      },
    };
  }
}
