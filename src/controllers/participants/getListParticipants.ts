import { Request, Response } from "express";
import { Participant } from "../../models";
import { ctrlWrapper } from "../../helpers";

const listParticipants = async (req: Request, res: Response) => {
  const result = await Participant.find({ event: req.params.id });

  res.status(200).json({
    result,
  });
};

export default {
  listParticipants: ctrlWrapper(listParticipants),
};
