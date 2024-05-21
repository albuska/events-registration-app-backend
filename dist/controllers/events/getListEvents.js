"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const listEvents = async (req, res) => {
    const { sortBy, sortOrder } = req.query;
    const sortOptions = {};
    const pipeline = [];
    if (typeof sortBy === "string" && typeof sortOrder === "string") {
        const order = sortOrder === "desc" ? -1 : 1;
        let dbSortBy = sortBy;
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
    const result = await models_1.Event.aggregate(pipeline);
    res.status(200).json({
        result,
    });
};
exports.default = {
    listEvents: (0, helpers_1.ctrlWrapper)(listEvents),
};
