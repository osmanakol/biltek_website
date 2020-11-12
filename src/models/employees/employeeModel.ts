import { checkSchema } from "express-validator"
import { ICompany } from "../company/companySchema"
import { IContact } from "../contact/contactSchema"

export type gender = "Male" | "Female"

export class EmployeeModel{
    public name_surname:string
    public gender:gender
    public company:ICompany
    public conctact:IContact[]
    

    constructor(name_surname:string,gender:gender,company:ICompany,contact:IContact[]) {
        this.name_surname=name_surname;
        this.gender=gender;
        this.company=company;
        this.conctact=contact;       
    }
}
//?? employee validation
export const EmployeeValidationChain=checkSchema({})