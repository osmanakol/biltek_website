import { Document, Schema, Model, model } from "mongoose"

export interface IUniversity extends Document{
    universityName:string;
}


const UniversitySchema:Schema = new Schema({
    universityName:{type:String,required:"University name is a required parameter"}
})

const UniversityDbModel:Model<IUniversity> = model("universities",UniversitySchema);

export default UniversityDbModel;