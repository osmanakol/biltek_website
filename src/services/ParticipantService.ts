import { ParticipantRepository } from "../repository/ParticipantRepository";
import ParticipantDbModel from "../models/participants/participantSchema";
import { ParticipantModel } from "../models/participants/participantModel";

export class ParticipantService {
    private repository = new ParticipantRepository(ParticipantDbModel);

    constructor() { }

    public create = async (item: ParticipantModel) => {
        //console.log("Service,create")
        const result = await this.repository.create(item);
        return result;
    }

    public createMany = async (item:ParticipantModel[])=>{
        //console.log("Service,createmany")
        const result = await this.repository.createMany(item)
        return result;
    }

    public update = async(id:string,item:ParticipantModel)=>{
        //console.log("Service,update")
        const result = await this.repository.update(id,item);
        return result;
    }

    public delete = async(id:string)=>{
        //console.log("Service,delete")
        const result = await this.repository.delete(id);
        return result;
    }

    public findAll=async()=>{
        //console.log("Service,findall")
        const result = await this.repository.findAll()
        return result;
    }

    public findById = async(id:string)=>{
        //console.log("Service,findid")
        const result = await this.repository.findById(id);
        return result;
    }

    public addEvent = async (eventId:string,participant:ParticipantModel) =>{
        console.log("Add Event")
        const result = await this.repository.addEvent(eventId,participant);
        return result;
    }

     
}