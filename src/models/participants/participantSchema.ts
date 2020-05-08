import { Document, Model, model, Schema } from "mongoose";
import { UniversityModel } from "../universities/universityModel";

export interface IParticipant extends Document {
    name: string;
    surName: string;
    university: Schema.Types.ObjectId;
    department:Schema.Types.ObjectId;
    email: string;
    date:string;
}

const ParticipantSchema: Schema = new Schema({
    name: { type: String, required: 'Name is required', trim: true },
    surName: { type: String, required: 'Surname is required parameter', trim: true },
    university: { type: Schema.Types.ObjectId, ref: 'universities' },
    department:{type:Schema.Types.ObjectId,ref:'departmentofUniversities'},
    email: { type: String, required: 'Email is a required parameter', trim: true },
    date:{type:String,required:"Date is a required parameter",default:Date().toString()}
})

const ParticipantDbModel: Model<IParticipant> = model('partipacipants', ParticipantSchema);

export default ParticipantDbModel 