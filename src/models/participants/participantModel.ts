import { UniversityModel } from "../universities/universityModel";

export class ParticipantModel {
    private name_surname: string;
    public university: string;
    public department:string;
    public email: string;
    public phone?:string;

    constructor(name_surname:string, university: string,department:string, email: string,phone?:string) {
        this.name_surname = name_surname;
        this.university = university;
        this.department = department;
        this.email = email;
        this.phone=phone;
     
    }

    public get FullName(): string {
        return this.name_surname.trim();
    }

  
}