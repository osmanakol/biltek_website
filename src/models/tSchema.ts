import { Document, Model, model, Schema } from "mongoose";
import { TModel } from "./tModel";

export interface ITeam extends Document, TModel {

}


const tSchema: Schema = new Schema({
    name_surname: { type: String, required: 'Name and surname are required', trim: true },
    university: { type: String, required: 'University is required parameter', default: "Ankara Yıldırım Beyazıt Üniversitesi" },
    department: { type: String, required: 'Department is required parameter' },
    email: { type: String, required: 'Email is a required parameter', trim: true },
    team: { type: String, required: "Team is required parameter", enum: ["Roket", "Siber Güvenlik", "Tasarım"] },
    sinif:{type:String,required:"Sinif is required parameter"},
    date: { type: String, required: "Date is a required parameter", default: new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" }) },
})
const TDbModel: Model<ITeam> = model('tSchema', tSchema);

export default TDbModel 