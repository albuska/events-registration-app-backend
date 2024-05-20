import { Request, Response } from "express";
import { ctrlWrapper } from "../../helpers";
import { Participant } from "../../models";

const addParticipant = async (req: Request, res: Response) => {
  const { _id: event } = req.body;

  const { body } = req;
  const result = await Participant.create({ ...body, event });
  res.status(201).json(result);
};

export default {
  addParticipant: ctrlWrapper(addParticipant),
};
