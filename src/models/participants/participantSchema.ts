import { Document, Model, model, Schema } from "mongoose";
import { UniversityModel } from "../universities/universitySchema";

export interface IParticipant extends Document {
    name: string;
    surName: string;
    university: UniversityModel;
    email: string;
}

const ParticipantSchema: Schema = new Schema({
    name: { type: String, required: 'Name is required', trim: true },
    surName: { type: String, required: 'Surname is required parameter', trim: true },
    university: { type: Schema.Types.ObjectId, ref: 'universities' },
    email: { type: String, required: 'Email is a required parameter', trim: true }
})

const ParticipantDbModel: Model<IParticipant> = model('partipacipants', ParticipantSchema);

export default ParticipantDbModel 