import express from "express";
import { addParticipant, listParticipants } from "../../controllers";

const router: express.Router = express.Router();

router.get("/:id", listParticipants.listParticipants);

router.post(
  "/",
  addParticipant.addParticipant
);

export default router;
