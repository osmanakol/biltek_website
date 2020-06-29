import { UniversityModel } from "../universities/universityModel";

export class ParticipantModel {
    private name_surname: string;
    public university: string;
    public department:string;
    public email: string;
    public date:string;
    public phone?:string;

    constructor(name_surname:string, university: string,department:string, email: string,phone?:string,date:string=new Date().toLocaleDateString("tr-TR",{timeZone:"Europe/Istanbul",weekday:"long",year:"numeric",month:"short",day:"numeric"})) {
        this.name_surname = name_surname;
        this.university = university;
        this.department = department;
        this.email = email;
        this.phone=phone;
        this.date=date;
    }

    public get FullName(): string {
        return this.name_surname.trim();
    }

  
}