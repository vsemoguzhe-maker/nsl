import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API routes FIRST
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
    try {
      const { name, phone } = req.body;
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        console.error("Telegram credentials missing");
        return res.status(500).json({ error: "Server configuration error" });
      }

      if (!name || !phone) {
        return res.status(400).json({ error: "Name and phone are required" });
      }

      const text = `Новая заявка на консультацию:\nИмя: ${name}\nТелефон: ${phone}`;
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Telegram API Error:", errorData);
        // Even if Telegram notification fails, we return success to the frontend
        // so the user (client) sees the "Thank You" screen instead of a generic error.
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      res.status(500).json({ error: error instanceof Error ? error.message : "Failed to process request" });
    }
  });

// Vite middleware for development
if (process.env.NODE_ENV !== "production" && process.env.VERCEL !== "1") {
  createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  }).then((vite) => {
    app.use(vite.middlewares);
  });
} else if (process.env.VERCEL !== "1") {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.get('*all', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start server only if not running on Vercel
if (process.env.VERCEL !== "1") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
