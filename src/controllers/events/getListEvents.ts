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
  const pipeline: any[] = [];

  if (typeof sortBy === "string" && typeof sortOrder === "string") {
    const order = sortOrder === "desc" ? -1 : 1;

    let dbSortBy: string = sortBy;
    if (sortBy === "eventDate") {
      dbSortBy = "event_date";
      pipeline.push({
        $addFields: {
          event_date: { $toDate: "$event_date" },
        },
      });
    }
    sortOptions[dbSortBy] = order;
    pipeline.push({ $sort: sortOptions });
  }

  const result = await Event.aggregate(pipeline);

  res.status(200).json({
    result,
  });
};

export default {
  listEvents: ctrlWrapper(listEvents),
};
