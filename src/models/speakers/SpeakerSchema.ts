import { Document, Model, model, Schema } from "mongoose";

export interface ISpeaker extends Document{

}

const SpeakerSchema:Schema=new Schema({
    employee_info:{type:Schema.Types.ObjectId,ref:"employee"},
    events:[{type:Schema.Types.ObjectId,ref:"events"}]
})

const SpeakerDBModel:Model<ISpeaker>=model("speaker",SpeakerSchema)
export default SpeakerDBModel