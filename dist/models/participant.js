"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participantSchema = exports.Participant = void 0;
const mongoose_1 = require("mongoose");
var ESelectedRadio;
(function (ESelectedRadio) {
    ESelectedRadio["SOCIAL_MEDIA"] = "social media";
    ESelectedRadio["FRIENDS"] = "friends";
    ESelectedRadio["FOUND_MYSELF"] = "found myself";
})(ESelectedRadio || (ESelectedRadio = {}));
// const emailRegExp =
//   /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const participantSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        maxLength: 20,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        // match: emailRegExp,
    },
    dateOfBirth: {
        type: String,
        required: [true, "Date of birth is required"],
    },
    selectedRadio: {
        type: String,
        enum: ESelectedRadio,
        default: ESelectedRadio.SOCIAL_MEDIA,
    },
    event: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "event",
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.participantSchema = participantSchema;
// participantSchema.post("save", handleMongooseError);
const Participant = mongoose_1.models.Participant || (0, mongoose_1.model)("participant", participantSchema);
exports.Participant = Participant;
