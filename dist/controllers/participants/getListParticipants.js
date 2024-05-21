"use strict";
// import { Request, Response } from "express";
// import { Participant } from "../../models";
// import { ctrlWrapper } from "../../helpers";
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
    try {
        const result = await models_1.Participant.find(searchQuery);
        res.status(200).json({ result });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
};
exports.default = {
    listParticipants: (0, helpers_1.ctrlWrapper)(listParticipants),
};
