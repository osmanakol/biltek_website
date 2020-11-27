import { Document, Model, model, Schema } from "mongoose";

export interface ISpeaker extends Document{

}

const SpeakerSchema:Schema=new Schema({
    name_surname:{type:String,required:'Name/surname required'},
    employee:{
        _id:false,
        employee_id:{type:Schema.Types.ObjectId,ref:"employee"}
    },
    event:[{
        _id:false,
        event_id:{type:Schema.Types.ObjectId,ref:"events"}
    }]
})

const SpeakerDBModel:Model<ISpeaker>=model("speaker",SpeakerSchema)
export default SpeakerDBModel