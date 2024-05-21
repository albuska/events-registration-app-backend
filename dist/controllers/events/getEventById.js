"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const models_1 = require("../../models");
const getEventById = async (req, res) => {
    const result = await models_1.Event.findById({ _id: req.params.id });
    res.status(200).json({
        result,
    });
};
exports.default = {
    getEventById: (0, helpers_1.ctrlWrapper)(getEventById),
};
