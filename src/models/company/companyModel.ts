import { IContact } from "../contact/contactSchema"
import { ISpeaker } from "../speakers/SpeakerSchema"


export class CompanyModel{
    public company_name:string
    //public employees:IEmployee[]
    public speakers:ISpeaker[]
    public contact:IContact

    // TODO:it should be completed when employee is added 
    constructor() {
        
    }

}
