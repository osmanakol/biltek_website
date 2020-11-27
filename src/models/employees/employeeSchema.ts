import { Document, Model, model, Schema } from "mongoose";

export interface IEmployee extends Document{

}

export const EmployeeSchema:Schema=new Schema({
    name_surname:{type:String,required:'Name/surname required'},
    gender:{type:String,enum:["Male","Female"],required:"Gender required"},
    company:{type:Schema.Types.ObjectId,ref:"company"},
    contact:{
        mail:{type:String,required:"Email is required"},
        phone:{type:String},
        /**Map<Key,Value>
         * type map: provides to create nested document
         * of: defines type of Value*/
        socialMedia:{type:Map,of:String}
    }
})

const EmployeeDBModel:Model<IEmployee>=model("employee",EmployeeSchema)
export default EmployeeDBModel