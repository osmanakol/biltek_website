import { DepartmentModel } from "../departmentOfUniversity/departmentModel";

export class UniversityModel {
    // TODO : Propertyler belirlenecek, constructor yazılacak ve participant model de bu class ile ilgili değişikler yapılacak.
    public universityName:string;
    public department:DepartmentModel[]

    constructor(universityName:string,department:DepartmentModel[]) {
        this.universityName = universityName;
        this.department = department;
    }
    
}