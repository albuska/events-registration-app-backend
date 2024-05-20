"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import { Server } from "http";
// import http from "http";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { MONGO_URL, PORT = 3000 } = process.env;
const app_1 = __importDefault(require("./app"));
mongoose_1.default.set("strictQuery", true);
if (!MONGO_URL) {
    console.error("MONGO_URL is not defined in the environment variables");
    process.exit(1);
}
mongoose_1.default
    .connect(MONGO_URL)
    .then(() => {
    app_1.default.listen(PORT, () => {
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
//# sourceMappingURL=server.js.map