import { listEvents } from "../../controllers";
import express from "express";

const router = express.Router();

router.get("/", listEvents.listEvents);

export default router;
