import { SpeakerModel } from "../models/speakers/SpeakerModel";
import SpeakerDBModel from "../models/speakers/SpeakerSchema";
import { SpeakerRepository } from "../repository/SpeakerRepository";



export class SpeakerService{

    private repository=new SpeakerRepository(SpeakerDBModel)

    constructor(){ }


    public create = async (item: SpeakerModel) => {

        const result = await this.repository.create(item);
        return result;
    }

    public createMany = async (item: SpeakerModel[]) => {
        const result = await this.repository.createMany(item)
        return result;
    }

    public update = async (id: string, item: SpeakerModel) => {
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