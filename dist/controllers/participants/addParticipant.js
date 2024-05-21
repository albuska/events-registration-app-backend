"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const models_1 = require("../../models");
const addParticipant = async (req, res) => {
    const { event } = req.body;
    const { body } = req;
    const result = await models_1.Participant.create({ ...body, event });
    res.status(201).json(result);
};
exports.default = {
    addParticipant: (0, helpers_1.ctrlWrapper)(addParticipant),
};
