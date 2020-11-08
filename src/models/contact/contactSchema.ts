import { Document, Model, model, Schema } from "mongoose";
import { ContactModel } from "./contactModel";

export interface IContact extends Document{
        address:string,
        phone?:string,
        email:string,
        socialmedias:Map<string,string>
}


const ContactSchema:Schema=new Schema({
    address:{type:String},
    phone:{type:String},
    email:{type:String,required:"Email info is required for contact",unique:true,},
    socialmedias:{type:Map,of:String},
    company:[{type:Schema.Types.ObjectId,ref:"company"}]



})

const ContactDbModel: Model<IContact>=model("contact",ContactSchema)

export default ContactDbModel