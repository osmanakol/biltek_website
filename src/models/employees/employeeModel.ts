import { checkSchema } from "express-validator"
import { ICompany } from "../company/companySchema"

export type Gender = "Male" | "Female"

export class EmployeeModel{
    public name_surname:string
    public gender:Gender
    public company:ICompany
    public conctact:any
    

    constructor(name_surname:string,gender:Gender,company:ICompany,contact:any) {
        this.name_surname=name_surname;
        this.gender=gender;
        this.company=company;
        this.conctact=contact;       
    }
}
//?? employee validation
export const EmployeeValidationChain=checkSchema({})