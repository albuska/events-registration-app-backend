"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const models_1 = require("../../models");
const addParticipant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id: event } = req.body;
    const { body } = req;
    const result = yield models_1.Participant.create(Object.assign(Object.assign({}, body), { event }));
    res.status(201).json(result);
});
exports.default = {
    addParticipant: (0, helpers_1.ctrlWrapper)(addParticipant),
};
