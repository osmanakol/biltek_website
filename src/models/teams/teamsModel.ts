import { ParticipantModel } from "../participants/participantModel"


export interface IProject {
    projectName: string;
    description: string;
    year: number;
}
export class TeamsModel {
    constructor(public teamName: string, public logo: string, public isActive: boolean = false,public foundationYear: number = new Date().getFullYear()) {

    }
}