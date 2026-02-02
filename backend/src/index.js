import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.NODE_ENV === "production"
      ? true
      : "http://localhost:5173",
    credentials: true,
  })
);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  // Path is now from backend/src/index.js to frontend/dist
  const frontendPath = path.join(__dirname, "../../frontend/dist");
  
  // Serve static files
  app.use(express.static(frontendPath));

  // Express v5 compatible catch-all - use middleware instead of route
  app.use((req, res, next) => {
    // Only serve index.html if not an API route
    if (!req.url.startsWith('/api')) {
      res.sendFile(path.join(frontendPath, "index.html"));
    } else {
      next();
    }
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});