import { BaseRepository } from "./base/BaseRepository";
import { EventModel } from "../models/events/eventModel";

export class EventRepository extends BaseRepository<EventModel>{
     getByActiveEvent =  (isActive:boolean) =>{
        const result =  this._model.find({"isActive":isActive},{_id:1,eventName:1})
        return result;
    }

    findAllwithSortDate = () =>{
        const result = this._model.find({},{_id:0}).sort({"isActive":-1,"time.startTime":-1})
        return result
    }
}