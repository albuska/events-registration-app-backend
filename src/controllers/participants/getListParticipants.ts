import { Request, Response } from "express";
import { Participant } from "../../models";
import { ctrlWrapper } from "../../helpers";

const listParticipants = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { query } = req.query;

  let filter: any = { event: id };

  if (query) {
    filter = {
      ...filter,
      $or: [
        { fullName: { $regex: new RegExp(query as string, "i") } },
        { email: { $regex: new RegExp(query as string, "i") } },
      ],
    };
  }

  try {
    const result = await Participant.find(filter);
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error listing participants:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  listParticipants: ctrlWrapper(listParticipants),
};
