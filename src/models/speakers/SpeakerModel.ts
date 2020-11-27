import { checkSchema } from "express-validator"
import { IEmployee } from "../employees/employeeSchema"
import { IEvent } from "../participants/participantModel"


export class SpeakerModel{
    public employee:IEmployee
    public events:IEvent[]
    
    constructor(employee:IEmployee,event:IEvent[]) {
        this.employee=employee
        this.events=event
    }
}

//?? speaker validation
export const SpeakerValidationChain=checkSchema({})
