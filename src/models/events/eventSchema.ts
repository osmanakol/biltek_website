import { Document, Schema, Model, model } from "mongoose";
import { EventModel } from "./eventModel";
export interface IEvents extends Document, EventModel {

}


const EventSchema: Schema = new Schema({
    eventName: { type: String, trim: true, required: true },
    topic: { type: String, required: true },
    speaker: { type: String, trim: true, required: true },
    img: { type: String, required: true },
    url: { type: String, required: true },
    isActive: { type: Boolean, default: false, required: true },
    time: {
        _id: false,
        startTime: { type: Date },
        finishTime: { type: Date }
    }
})

const EventDbModel: Model<IEvents> = model("events", EventSchema)

export default EventDbModel