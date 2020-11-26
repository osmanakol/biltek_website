import { Document,Model,model, Schema } from "mongoose";


export interface ICompany extends Document{
    company_name:string
}

const CompanySchema:Schema=new Schema({
    company_name:{type:String,required:"Company name is required"},
    contact:{
        mail:{type:String,required:true},
        phone:{type:String}
    }


})

const CompanyDBModel:Model<ICompany>=model("company",CompanySchema)
export default CompanyDBModel
