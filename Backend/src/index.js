import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "../src/middleware/rateLimiter.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);
app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
  app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
});
