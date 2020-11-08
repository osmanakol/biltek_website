import { Document, Model, model, Schema } from "mongoose";

export interface ISpeaker extends Document{

}

const SpeakerSchema:Schema=new Schema({
    name_surname:{type:String,required:'Name/surname required'},
    gender:{type:String,enum:["Male","Female"],required:"Gender required"},
    company:{type:Schema.Types.ObjectId,ref:"company"},
    contact:[{type:Schema.Types.ObjectId,ref:"contact"}],
    events:[{type:Schema.Types.ObjectId,ref:"events"}]
})

const SpeakerDBModel:Model<ISpeaker>=model("speaker",SpeakerSchema)
export default SpeakerDBModel