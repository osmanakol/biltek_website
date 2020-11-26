import { Document, Model, model, Schema } from "mongoose";

export interface ISpeaker extends Document{

}

const SpeakerSchema:Schema=new Schema({
    name_surname:{type:String,required:'Name/surname required'},
    gender:{type:String,enum:["Male","Female"],required:"Gender required"},
    company:{type:Schema.Types.ObjectId,ref:"company"},
    contact:{
        mail:{type:String,required:"Email is required"},
        phone:{type:String},
        social:{
            linkedIn:{type:String},
            instagram:{type:String}
        },
    },
    event:{
        _id:false,
        event_id:{type:Schema.Types.ObjectId,ref:"events"}
    }
})

const SpeakerDBModel:Model<ISpeaker>=model("speaker",SpeakerSchema)
export default SpeakerDBModel