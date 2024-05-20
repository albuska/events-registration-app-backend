import express from "express";
import { validateBody } from "../../middlewares";
import { participantSchema } from "../../models";
import { addParticipant, listParticipants } from "../../controllers";

const router: express.Router = express.Router();

router.get("/", listParticipants.listParticipants);

router.post(
  "/",
  validateBody(participantSchema),
  addParticipant.addParticipant
);

export default router;
