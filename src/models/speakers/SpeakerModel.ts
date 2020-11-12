import { checkSchema } from "express-validator"
import { ICompany } from "../company/companySchema"
import { IContact } from "../contact/contactSchema"
import { EmployeeModel,gender } from "../employees/employeeModel"
import { IEvent } from "../participants/participantModel"

export class SpeakerModel extends EmployeeModel{
    public events:IEvent[]
    constructor(name_surname:string,gender:gender,company:ICompany,contact:IContact[],events:IEvent[]) {
        super(name_surname,gender, company, contact)
        this.events=events
    }
}

//?? speaker validation
export const SpeakerValidationChain=checkSchema({})
