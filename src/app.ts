import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import eventsRouter from "./routes/api/events";
import participantsRouter from "./routes/api/participants";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/events", eventsRouter);
app.use("/api/participants", participantsRouter);

app.get("/hi", (req: Request, res: Response) => {
  res.send("hi");
});

app.get("/check-db-connection", async (req: Request, res: Response) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send("Database connection is successful!");
  } catch (error) {
    res.status(500).send("Database connection failed!");
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: any, req: Request, res: Response) => {
  const status = 500;
  const message = err.message || "Server error";
  res.status(status).json({ message });
});

export default app;
