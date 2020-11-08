import { Document, Model, model, Schema } from "mongoose";

export interface ITeam extends Document {
    
}


const teamSchema: Schema = new Schema({
   teamName:{type:String, required:"Team name is required",unique:true},
   foundationYear:{type:Number,required:"Year is required",default:new Date().getFullYear},
   isActive:{type:Boolean ,required:"Activated state is required",default:true}
}) 
const TeamDbModel: Model<ITeam> = model('teams', teamSchema);
 
export default TeamDbModel 