import { checkSchema } from "express-validator"
import { ICompany } from "../company/companySchema"
//import { IContact } from "../contact/contactSchema"
import { Gender } from "../employees/employeeModel"

import { IEvent } from "../participants/participantModel"

export class SpeakerModel{
    public name_surname:string
    public gender:Gender
    public company:ICompany
    public contact:any
    public event:IEvent
    
    constructor(name_surname:string,gender:Gender,company:ICompany,contact:any,event:IEvent) {
        this.name_surname=name_surname;
        this.gender=gender
        this.company=company
        this.contact=contact
        this.event=event
    }
}

//?? speaker validation
export const SpeakerValidationChain=checkSchema({})
