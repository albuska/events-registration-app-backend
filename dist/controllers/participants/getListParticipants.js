"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const listParticipants = async (req, res) => {
    const { event } = req.body;
    const result = await models_1.Participant.find({ event });
    res.status(200).json({
        result,
    });
};
exports.default = {
    listParticipants: (0, helpers_1.ctrlWrapper)(listParticipants),
};
