import mongoose from "mongoose";
// import { Server } from "http";
// import http from "http";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_URL, PORT = 3000 } = process.env;

import app from "./app";

mongoose.set("strictQuery", true);

if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in the environment variables");
  process.exit(1);
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// const dbConnection = async () =>
//   mongoose
//     .connect(MONGO_URL, {})
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error: Error) => {
//       console.log("MongoDB connection error:", error);
//       process.exit(1);
//     });

// const startServer = () => {
//   app.listen(PORT || 3000, () => {
//     console.log(`Server is running on port ${PORT}`);
//   }) as Server;
// };

// const init = async () => {
//   await dbConnection();
//   startServer();
// };

// init();
