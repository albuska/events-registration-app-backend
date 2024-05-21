"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../../controllers");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", controllers_1.listEvents.listEvents);
router.get("/:id", controllers_1.getEventById.getEventById);
exports.default = router;
