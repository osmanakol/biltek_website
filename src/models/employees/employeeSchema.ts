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
        social:{
            linkedIn:{type:String},
            instagram:{type:String}
        }
    }
    //contact:[{type:Schema.Types.ObjectId,ref:"contact"}],

})

const EmployeeDBModel:Model<IEmployee>=model("employee",EmployeeSchema)
export default EmployeeDBModel