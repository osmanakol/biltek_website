import { Document, Model, model, Schema } from "mongoose";

export interface IParticipant extends Document {
    name: string;
    surName: string;
    university:string;
    department:string;
    email: string;
    date:string;
}

const ParticipantSchema: Schema = new Schema({
    name: { type: String, required: 'Name is required', trim: true },
    surName: { type: String, required: 'Surname is required parameter', trim: true },
    university: { type: String, required:'University is required parameter'},
    department:{type:String,required:'Department is required parameter'},
    email: { type: String, required: 'Email is a required parameter', trim: true },  
    date:{type:String,required:"Date is a required parameter",default:new Date().toLocaleDateString("tr-TR",{timeZone:"Europe/Istanbul",weekday:"long",year:"numeric",month:"short",day:"numeric"})}
}) 
const ParticipantDbModel: Model<IParticipant> = model('partipacipants', ParticipantSchema);
 
export default ParticipantDbModel 