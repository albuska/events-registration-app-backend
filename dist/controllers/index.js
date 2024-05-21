"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listParticipants = exports.addParticipant = exports.getEventById = exports.listEvents = void 0;
const events_1 = require("./events");
Object.defineProperty(exports, "listEvents", { enumerable: true, get: function () { return events_1.listEvents; } });
Object.defineProperty(exports, "getEventById", { enumerable: true, get: function () { return events_1.getEventById; } });
const participants_1 = require("./participants");
Object.defineProperty(exports, "addParticipant", { enumerable: true, get: function () { return participants_1.addParticipant; } });
Object.defineProperty(exports, "listParticipants", { enumerable: true, get: function () { return participants_1.listParticipants; } });
