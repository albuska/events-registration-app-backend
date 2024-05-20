"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSchema = exports.Event = void 0;
const mongoose_1 = require("mongoose");
const helpers_1 = require("../helpers");
const eventSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: 40,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    event_date: {
        type: String,
        required: [true, "Event_date is required"],
    },
    organizer: {
        type: String,
        required: [true, "Event_date is required"],
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.eventSchema = eventSchema;
eventSchema.post("save", helpers_1.handleMongooseError);
const Event = (0, mongoose_1.model)("event", eventSchema);
exports.Event = Event;
//# sourceMappingURL=event.js.map