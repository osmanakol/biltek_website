import { checkSchema } from "express-validator"
import { IEmployee } from "../employees/employeeSchema"
import { IEvent } from "../participants/participantModel"


export class SpeakerModel{
    public name_surname:string
    public employee:IEmployee
    public event:IEvent[]
    
    constructor(name_surname:string,employee:IEmployee,event:IEvent) {
        this.name_surname=name_surname
        this.employee=employee
        this.event.push(event)
    }
}

//?? speaker validation
export const SpeakerValidationChain=checkSchema({})
