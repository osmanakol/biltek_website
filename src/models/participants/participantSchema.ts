import { Document, Model, model, Schema } from "mongoose";
import { ParticipantModel } from "./participantModel";

export interface IParticipant extends Document, ParticipantModel {
    addEvent():Document
}


const ParticipantSchema: Schema = new Schema({
    name_surname: { type: String, required: 'Name and surname are required', trim: true },
    university: { type: String, required: 'University is required parameter' },
    department: { type: String, required: 'Department is required parameter' },
    email: { type: String, required: 'Email is a required parameter', trim: true },
    phone: { type: String },
    date: { type: String, required: "Date is a required parameter", default: new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" }) },
    events:[{
        _id:false,
        event_id:{type:Schema.Types.ObjectId,ref:"events"},
        isJoin:{type:Boolean}
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
