import { Document, Model, model, Schema } from "mongoose";
import { checkSchema } from "express-validator";

export interface IParticipant extends Document {
    name_surname: string;
    university:string;
    department:string;
    email: string;
    phone?:string;
    date:string;
}


const ParticipantSchema: Schema = new Schema({
    name_surname: { type: String, required: 'Name and surname are required', trim: true },
    university: { type: String, required:'University is required parameter'},
    department:{type:String,required:'Department is required parameter'},
    email: { type: String, required: 'Email is a required parameter', trim: true },  
    phone:{type:String},
    date:{type:String,required:"Date is a required parameter",default:new Date().toLocaleDateString("tr-TR",{timeZone:"Europe/Istanbul",weekday:"long",year:"numeric",month:"short",day:"numeric"})}
}) 
const ParticipantDbModel: Model<IParticipant> = model('partipacipants', ParticipantSchema);

export const ParticipantValidationChain=checkSchema({ 
    name_surname:{
        exists:true,
        errorMessage:"Name_surname propertysi eksik",
        trim:true,
        escape:true,
        isAlpha:{
            errorMessage:"Invalid name_surname"
        },
        isLength:{
            options:{min:5,max:30},
            errorMessage:"Minimum 5 characters required!"
        }
    },
    email:{
        exists:{
            errorMessage:"Email property eksik"
        },
        trim:true,
        isEmail:true,
        errorMessage:"Invalid email",
    },
    phone:{
        exists:true,
        errorMessage:"Phone propertysi eksik",
        blacklist:{
            options:['-']
        },
        optional:true,
        matches:{
            options:["^[0-9]"],
            errorMessage:"Please enter digits",
        },
        isLength:{
            options:{
                min:10,
                max:10,
            },
            errorMessage:"Invalid phone number"
        },
    },
    university:{
        exists:true,
        errorMessage:"University property eksik"
    },
    department:{
        exists:true,
        errorMessage:"Department property eksik"
    }
})
 
export default ParticipantDbModel 
