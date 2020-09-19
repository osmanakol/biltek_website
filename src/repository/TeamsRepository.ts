import { BaseRepository } from "./base/BaseRepository";
import { TeamsModel } from "../models/teams/teamsModel";

export class TeamsRepository extends BaseRepository<TeamsModel>{

    public addParticipants = (teamId: string, teams:TeamsModel ) => {
        console.log(teamId)
        console.log(teams)
        this._model.findOne({ email: teams.teamName }, { _id: 1, teams: 1 }, (err) => {
            if (err)
                return err;
        }).then((res) => {
            if (res === null) {
                console.log("if a geldim")
                const teamMembers = new Array()
                teamMembers.push({
                    team_id: teamId,
                    isJoin: false
                })
                const createNew: TeamsModel = new TeamsModel(teams.teamName,new Array(...teamMembers),teams.foundationYear,teams.isActive )
                const result = this._model.create(createNew)
                return result;
            }
            else {
                const teams_interface: ITeamofParticipants = {
                    teams_id: teamId,
                    isJoin: false
                }
                var data = res.toObject().teams.filter((teams_interface: any) => teams_interface.team_id == teamId)
                // if(data.length == 0){
                const result = this._model.findOneAndUpdate({ teamName: teams.teamName}, { $push: {teams: teams_interface } })
                return result;
                // }
                // else{
                //     console.log("bura geldim")
                //     // _next( new Error("Etkinliğimize kaydınız mevcuttur"))
                // }
            }
        })
    }


    
}