import { Document, Model, model, Schema } from "mongoose";
import { ITeamMember, ParticipantModel } from "./participantModel";
import { response } from "express";

export interface IParticipant extends Document, ParticipantModel,ITeamMember {

}


const ParticipantSchema: Schema = new Schema({
    name_surname: { type: String, required: 'Name and surname are required', trim: true },
    university: { type: String, required: 'University is required parameter' },
    department: { type: String, required: 'Department is required parameter' },
    email: { type: String, required: 'Email is a required parameter', trim: true },
    phone: { type: String },
    date: { type: String, required: "Date is a required parameter", default: new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" }) },
    teams: [{
        year:{type:Number,default:new Date().getFullYear},
        _id:false,
        team_id:{type:Schema.Types.ObjectId,ref:"teams"},
        role:{type:String ,enum:["Leader","Member"],required:"Role is required",default:"Member"}
    }]
})

ParticipantSchema.pre<IParticipant>('save', function (_next) {
    console.log("geldim lo")
    ParticipantDbModel.findOne({ email: this.email }, { email: 1, _id: 0 }, (err) => {
        if (err)
            _next(err)
    }).then((res) => {
        console.log(res)
        if (res === null) {
            console.log("hatasız geldim")
            _next()
        }
        else {
            console.log("aynısından var")
            _next(new Error("Mail adresiniz sistemimizde mevcut"))
        }
    })
})


const ParticipantDbModel: Model<IParticipant> = model('participants', ParticipantSchema);


export default ParticipantDbModel 
