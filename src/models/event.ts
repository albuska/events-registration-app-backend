import { Schema, model } from "mongoose";
import { handleMongooseError } from "../helpers";

interface IEvent {
  title: string;
  description: string;
  event_date: string;
  organizer: string;
}

const eventSchema = new Schema<IEvent>(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

eventSchema.post("save", handleMongooseError);

const Event = model("event", eventSchema);

export { Event, eventSchema };
