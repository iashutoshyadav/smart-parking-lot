import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import slotRoutes from "./routes/slotRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

connectDB();

const app = express();

const allowedOrigins = process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(",").map((url) => url.trim())
    : [];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);
app.use(express.json());

app.use("/api/slots", slotRoutes);

app.get("/api/health", (_req, res) => {
    res.json({ success: true, message: "SmartPark API is running" });
});

app.use((_req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
