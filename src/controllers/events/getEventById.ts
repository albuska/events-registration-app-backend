import { Request, Response } from "express";
import { ctrlWrapper } from "../../helpers";
import { Event } from "../../models";

const getEventById = async (req: Request, res: Response) => {
  const result = await Event.findById({ _id: req.params.id });

  res.status(200).json({
    result,
  });
};

export default {
  getEventById: ctrlWrapper(getEventById),
};
