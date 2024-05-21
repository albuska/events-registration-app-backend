"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const listEvents = async (req, res) => {
    const { sortBy, sortOrder } = req.query;
    const sortOptions = {};
    if (typeof sortBy === "string" && typeof sortOrder === "string") {
        sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
    }
    const result = await models_1.Event.find().sort(sortOptions);
    res.status(200).json({
        result,
    });
};
exports.default = {
    listEvents: (0, helpers_1.ctrlWrapper)(listEvents),
};
