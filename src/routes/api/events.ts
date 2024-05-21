import { getEventById, listEvents } from "../../controllers";
import express from "express";

const router = express.Router();

router.get("/", listEvents.listEvents);

router.get("/:id", getEventById.getEventById);

export default router;
