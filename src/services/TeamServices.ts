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
        const result = await this.tRepository.fid(item)
        return result
    }

    public get = async ()=>{
        const result = await this.tRepository.findAll()
        return result;
    }

    public create = async (item: TeamsModel) => {

        const result = await this.repository.create(item);
        return result;
    }

    public createMany = async (item: TeamsModel[]) => {
        const result = await this.repository.createMany(item)
        return result;
    }

    public update = async (id: string, item: TeamsModel) => {
        const result = await this.repository.update(id, item);
        return result;
    }

    public delete = async (id: string) => {
        const result = await this.repository.delete(id);
        return result;
    }

    public findAll = async () => {
        const result = await this.repository.findAll()
        return result;
    }

    public findById = async (id: string) => {
        const result = await this.repository.findById(id);
        return result;
    }


}