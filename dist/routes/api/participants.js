"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const models_1 = require("../../models");
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
router.get("/", controllers_1.listParticipants.listParticipants);
router.post("/", (0, middlewares_1.validateBody)(models_1.participantSchema), controllers_1.addParticipant.addParticipant);
exports.default = router;
