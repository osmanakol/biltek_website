import { checkSchema } from "express-validator"
import { IContact } from "../contact/contactSchema"
import { IEvent } from "../participants/participantModel"


type gender = "Male" | "Female"

export class SpeakerModel{
    public name_surname:string
    public gender:gender
    public company:string //!!company modelini oluşturunca eklenecek
    public conctact:IContact[]
    public events:IEvent[]


    constructor(name_surname:string,gender:gender,company:string,contact:IContact[],events:IEvent[]) {
        this.name_surname=name_surname;
        this.gender=gender;
        this.company=company;
        this.conctact=contact;
        this.events=events;        
    }
}


//?? speaker validation
export const SpeakerValidationChain=checkSchema({})
