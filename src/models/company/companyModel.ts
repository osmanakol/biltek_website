import { IContact } from "../employees/employeeModel"
export class CompanyModel{
    public company_name:string
    public contact:IContact

    constructor(company_name:string,contact:IContact) {
        this.company_name=company_name
        this.contact=contact
    }

}
