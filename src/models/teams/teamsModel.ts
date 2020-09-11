import { ParticipantModel } from "../participants/participantModel"


interface IProject {
    projectName: string;
    description: string;
    year: number;
}
type role = "Leader" | "Member"

interface ITeamMember {
    teamMember: ParticipantModel;
    year: number
    role: role;
}

export class TeamsModel {
    constructor(public teamName: string, public teamMember: ITeamMember[], 
        public foundationYear: number = new Date().getFullYear(), public isActive: boolean = true) {

    }



}