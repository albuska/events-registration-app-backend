import { Request, Response } from "express";
import { Event } from "../../models";
import { ctrlWrapper } from "../../helpers";
import { ParsedQs } from "qs";

const listEvents = async (req: Request, res: Response) => {
  const { sortBy, sortOrder } = req.query as {
    sortBy: ParsedQs;
    sortOrder: ParsedQs;
  };
  const sortOptions: { [key: string]: 1 | -1 } = {};

  if (typeof sortBy === "string" && typeof sortOrder === "string") {
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
  }

  const result = await Event.find().sort(sortOptions);

  res.status(200).json({
    result,
  });
};

export default {
  listEvents: ctrlWrapper(listEvents),
};
