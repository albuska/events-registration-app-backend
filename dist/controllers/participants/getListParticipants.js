"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const listParticipants = async (req, res) => {
    const { id } = req.params;
    const { query } = req.query;
    let filter = { event: id };
    if (query) {
        filter = {
            ...filter,
            $or: [
                { fullName: { $regex: new RegExp(query, "i") } },
                { email: { $regex: new RegExp(query, "i") } },
            ],
        };
    }
    try {
        const result = await models_1.Participant.find(filter);
        res.status(200).json({ result });
    }
    catch (error) {
        console.error("Error listing participants:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.default = {
    listParticipants: (0, helpers_1.ctrlWrapper)(listParticipants),
};
