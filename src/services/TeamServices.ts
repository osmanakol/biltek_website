import { TeamsRepository } from "../repository/TeamsRepository";
import TeamDbModel from "../models/teams/teamsShema";
import { TeamsModel } from "../models/teams/teamsModel";
import { TRepository } from "../repository/TRepository";
import TDbModel from "../models/tSchema";
import { TModel } from "../models/tModel";

export class TeamService {

    private repository = new TeamsRepository(TeamDbModel)
    private tRepository = new TRepository(TDbModel)

    constructor() { }

    public add = async (item:TModel)=>{
        const result = await this.tRepository.create(item)
        return result
    }


    public create = async (item: TeamsModel) => {

        const result = await this.repository.create(item);
        return result;
    }

    public createMany = async (item: TeamsModel[]) => {
        console.log("Service,createmany")
        const result = await this.repository.createMany(item)
        return result;
    }

    public update = async (id: string, item: TeamsModel) => {
        console.log("Service,update")
        const result = await this.repository.update(id, item);
        return result;
    }

    public delete = async (id: string) => {
        console.log("Service,delete")
        const result = await this.repository.delete(id);
        return result;
    }

    public findAll = async () => {
        console.log("Service,findall")
        const result = await this.repository.findAll()
        return result;
    }

    public findById = async (id: string) => {
        console.log("Service,findid")
        const result = await this.repository.findById(id);
        return result;
    }


}