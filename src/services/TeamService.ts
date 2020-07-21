import {TeamRepository} from "../repository/TeamRepository";
import TeamDbModel from "../models/teams/teamSchema";
import {TeamModel} from "../models/teams/teamModel";

export class TeamService {

private repository=new TeamRepository(TeamDbModel)

constructor(){}
public create=async(item:TeamModel)=>{

const result=await this.repository.create(item);

return result;

}

}