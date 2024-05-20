import { Request, Response } from "express";
import { Event } from "../../models";
import { ctrlWrapper } from "../../helpers";

const listEvents = async (req: Request, res: Response) => {
  const result = await Event.find();

  res.status(200).json({
    result,
  });
};

export default {
  listEvents: ctrlWrapper(listEvents),
};
