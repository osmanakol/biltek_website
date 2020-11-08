import { Document,Model,model, Schema } from "mongoose";


export interface ICompany extends Document{
    company_name:string
}

const CompanySchema:Schema=new Schema({
    company_name:{type:String,required:"Company name is required"},
    speakers:[{type:Schema.Types.ObjectId,ref:"speaker"}],
    //employees:[{type:Schema.Types.ObjectId,ref:"employee"}],
    contact:[{type:Schema.Types.ObjectId,ref:"contact"}],


})

const CompanyDBModel:Model<ICompany>=model("company",CompanySchema)
export default CompanyDBModel
