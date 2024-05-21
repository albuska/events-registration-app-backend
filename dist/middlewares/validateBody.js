"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const helpers_1 = require("../helpers");
const validateBody = (schema) => {
    const func = (req, res, next) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            throw (0, helpers_1.httpError)(400, "missing fields");
        }
        const { error } = schema.validate(req.body);
        console.log(error, 'error');
        if (error) {
            next((0, helpers_1.httpError)(400, `${error.details[0].message}`));
        }
        next();
    };
    return func;
};
exports.validateBody = validateBody;
