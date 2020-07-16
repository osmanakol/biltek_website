import { Document, Model, model, Schema } from "mongoose";

export interface IParticipant extends Document {
    name_surname: string;
    university:string;
    department:string;
    email: string;
    phone?:string;
    date:string;
}


const ParticipantSchema: Schema = new Schema({
    name_surname: { type: String, required: 'Name and surname are required', trim: true },
    university: { type: String, required:'University is required parameter'},
    department:{type:String,required:'Department is required parameter'},
    email: { type: String, required: 'Email is a required parameter', trim: true },  
    phone:{type:String},
    date:{type:String,required:"Date is a required parameter",default:new Date().toLocaleDateString("tr-TR",{timeZone:"Europe/Istanbul",weekday:"long",year:"numeric",month:"short",day:"numeric"})}
}) 
const ParticipantDbModel: Model<IParticipant> = model('partipacipants', ParticipantSchema);

export default ParticipantDbModel 
