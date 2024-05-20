import { Schema, model, models } from "mongoose";
import { handleMongooseError } from "../helpers";

interface IParticipant {
  fullName: string;
  email: string;
  dateOfBirth: string;
  selectedRadio: string;
  event: Schema.Types.ObjectId;
}

enum ESelectedRadio {
  SOCIAL_MEDIA = "social media",
  FRIENDS = "friends",
  FOUND_MYSELF = "found myself",
}

// const emailRegExp =
//   /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const participantSchema = new Schema<IParticipant>(
  {
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
      type: Schema.Types.ObjectId,
      ref: "event",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

participantSchema.post("save", handleMongooseError);

const Participant =
  models.Participant || model("participant", participantSchema);

export { Participant, participantSchema };
