import { Document, Model, model, Schema } from "mongoose";
import { ITeamMember, ParticipantModel } from "./participantModel";
import { response } from "express";
import { logger } from "../../middlewares/logger";


export interface IParticipant extends Document, ParticipantModel, ITeamMember {
    addEvent(): Document
}


const ParticipantSchema: Schema = new Schema({
    name_surname: { type: String, required: 'Name and surname are required', trim: true },
    university: { type: String, required: 'University is required parameter' },
    department: { type: String, required: 'Department is required parameter' },
    email: { type: String, required: 'Email is a required parameter', trim: true },
    phone: { type: String },
    date: { type: String, required: "Date is a required parameter", default: new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" }) },
    teams: [{
        year: { type: Number, default: new Date().getFullYear },
        _id: false,
        team_id: { type: Schema.Types.ObjectId, ref: "teams" },
        role: { type: String, enum: ["Leader", "Member"], required: "Role is required", default: "Member" }
    }],
    events: [{
        _id: false,
        event_id: { type: Schema.Types.ObjectId, ref: "events" },
        isJoin: { type: Boolean }
    }]
})

ParticipantSchema.pre<IParticipant>('save', function (_next) {
    ParticipantDbModel.findOne({ email: this.email }, { email: 1, _id: 0 }, (err) => {
        if (err)
            _next(err)
    }).then((res) => {
        if (res === null) {
            logger.info(`A participant is registered`)
            _next()
        }
        else {
            logger.warn(`Mail is already registered`)
            _next(new Error("Mail adresiniz sistemimizde mevcut"))
        }
    })
})

/*ParticipantSchema.methods.addEvent = function(eventId:string,participant:ParticipantModel):IParticipant{
    ParticipantDbModel.findOne({email:participant.email},{_id:1,events:1},(err)=>{
        if(err)
            return err.message
    }).then((res) => {
        if(res === null){
            console.log("if a geldim")
            const event = new Array()
            event.push({
                event_id:eventId,
                isJoin:false
            })
            const createNew:ParticipantModel = new ParticipantModel(participant.name_surname,participant.university,participant.department,participant.email,participant.phone,new Array(...event));
            const result = ParticipantDbModel.create(createNew)
            return result;
        }
        else{
            const event:IEvent = {
                event_id:eventId,
                isJoin:false
            }
            var data = res.toObject().events.filter((event:any)=>event.event_id == eventId)
            if(data.length == 0){
                const result = ParticipantDbModel.findOneAndUpdate({email:participant.email},{$push:{events:event}})
                return result;
            }
            else{

            }
        }
    })
}*/


const ParticipantDbModel: Model<IParticipant> = model('participants', ParticipantSchema);

export default ParticipantDbModel 
