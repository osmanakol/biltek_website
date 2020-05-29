import { UniversityModel } from "../universities/universityModel";

export class ParticipantModel {
    private name: string;
    private surName: string;
    public university: string;
    public department:string;
    public email: string;
    public date:string;

    constructor(name: string, surName: string, university: string,department:string, email: string,date:string=new Date().toLocaleDateString("tr-TR",{timeZone:"Europe/Istanbul",weekday:"long",year:"numeric",month:"short",day:"numeric"})) {
        this.name = name;
        this.surName = surName;
        this.university = university;
        this.department = department;
        this.email = email;
        this.date=date;
    }

    public get FullName(): string {
        return this.name.trim() + this.surName.trim()
    }

    public set Name(name: string) {
        this.name = name;
    }

    public set SurName(surName: string) {
        this.surName = surName;
    }
}