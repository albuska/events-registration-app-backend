"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const events_1 = __importDefault(require("./routes/api/events"));
const participants_1 = __importDefault(require("./routes/api/participants"));
const app = (0, express_1.default)();
// const formatsLogger = app.get("env") === "development" ? "dev" : "short";
// app.use(logger(formatsLogger));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use("/api/events", events_1.default);
app.use("/api/participants", participants_1.default);
app.get("/hi", (req, res) => {
    res.send("hi");
});
app.get("/check-db-connection", async (req, res) => {
    try {
        await mongoose_1.default.connection.db.admin().ping();
        res.status(200).send("Database connection is successful!");
    }
    catch (error) {
        res.status(500).send("Database connection failed!");
    }
});
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, req, res) => {
    const status = 500;
    const message = err.message || "Server error";
    res.status(status).json({ message });
});
exports.default = app;
//# sourceMappingURL=app.js.map