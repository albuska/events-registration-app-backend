"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const listParticipants = async (req, res) => {
    const { id } = req.params;
    const { query } = req.query;
    const searchQuery = { event: id };
    if (query) {
        searchQuery.$or = [
            { email: { $regex: query, $options: "i" } },
            { fullName: { $regex: query, $options: "i" } },
        ];
    }
    const result = await models_1.Participant.find(searchQuery);
    res.status(200).json({
        result,
    });
};
exports.default = {
    listParticipants: (0, helpers_1.ctrlWrapper)(listParticipants),
};
