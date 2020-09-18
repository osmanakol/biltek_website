import { BaseRepository } from "./base/BaseRepository";
import { EventModel } from "../models/events/eventModel";

export class EventRepository extends BaseRepository<EventModel>{
     getByActiveEvent =  (isActive:boolean) =>{
        const result =  this._model.find({"isActive":isActive},{_id:1,eventName:1})
        return result;
    }
}