import { saveContact } from "./saveContact.js";

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString();
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

export function viteContactPlugin(mongoUri) {
  const handler = async (req, res, next) => {
    const path = req.url?.split("?")[0];
    if (path !== "/api/contact") {
      next();
      return;
    }

    if (req.method !== "POST") {
      sendJson(res, 405, { success: false, message: "Method not allowed" });
      return;
    }

    try {
      const body = await readJsonBody(req);
      const result = await saveContact(body, mongoUri);
      sendJson(res, result.status, result.body);
    } catch {
      sendJson(res, 500, {
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}
