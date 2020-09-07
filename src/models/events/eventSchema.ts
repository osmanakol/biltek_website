import { Document, Schema, Model, model } from "mongoose";
import { EventsModel } from "./eventsModel";
export interface IEvents extends Document,EventsModel{

}
const EventSchema : Schema = new Schema({

})

const EventDbModel:Model<IEvents> = model("events",EventSchema)
export default EventDbModel