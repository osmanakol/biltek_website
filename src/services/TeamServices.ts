import { TeamsRepository } from "../repository/TeamsRepository";
import TeamDbModel from "../models/teams/teamsShema";
import {TeamsModel} from "../models/teams/teamsModel";

export class TeamService {

private repository=new TeamsRepository(TeamDbModel)

constructor(){}
public create=async(item:TeamsModel)=>{

const result=await this.repository.create(item);

return result;

}

}