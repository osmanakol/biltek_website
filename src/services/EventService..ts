import { EventRepository } from "../repository/EventRepository";
import EventDbModel from "../models/events/eventSchema";
import { EventModel } from "../models/events/eventModel";

export class EventService{
    private repository = new EventRepository(EventDbModel)

    constructor(){}

    public create = async (item:EventModel)=>{
        const result = await this.repository.create(item)
        return result
    }

    public update = async (id:string,item:EventModel)=>{
        const result = await this.repository.update(id,item)
        return result;
    }

    public delete = async (id:string)=>{
        const result = await this.repository.delete(id);
        return result;
    }

    public findAll = async ()=>{
        const result = await this.repository.findAll()
        return result;
    }
}