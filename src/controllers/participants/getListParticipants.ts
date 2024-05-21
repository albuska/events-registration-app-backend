// import { Request, Response } from "express";
// import { Participant } from "../../models";
// import { ctrlWrapper } from "../../helpers";

// const listParticipants = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { query } = req.query;

//   const searchQuery: any = { event: id };

//   if (query) {
//     searchQuery.$or = [
//       { email: { $regex: query, $options: "i" } },
//       { fullName: { $regex: query, $options: "i" } },
//     ];
//   }

//   const result = await Participant.find(searchQuery);

//   res.status(200).json({
//     result,
//   });
// };

// export default {
//   listParticipants: ctrlWrapper(listParticipants),
// };

import { Request, Response } from "express";
import { Participant } from "../../models";
import { ctrlWrapper } from "../../helpers";

const listParticipants = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { query } = req.query;

  const searchQuery: any = { event: id };
  
  if (query) {
    searchQuery.$or = [
      { email: { $regex: query, $options: "i" } },
      { fullName: { $regex: query, $options: "i" } },
    ];
  }

  try {
    const result = await Participant.find(searchQuery);
    res.status(200).json({ result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

export default {
  listParticipants: ctrlWrapper(listParticipants),
};