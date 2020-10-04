import { BaseRepository } from "./base/BaseRepository";
import { ParticipantModel, IEvent } from "../models/participants/participantModel";
import { NextFunction } from "express";


export class ParticipantRepository extends BaseRepository<ParticipantModel>{
    public addEvent = (eventId: string, participant: ParticipantModel) => {
        console.log(eventId)
        console.log(participant)
        this._model.findOne({ email: participant.email }, { _id: 1, events: 1 }, (err) => {
            if (err)
                return err;
        }).then((res) => {
            if (res === null) {
                console.log("if a geldim")
                const event = new Array()
                event.push({
                    event_id: eventId,
                    isJoin: false
                })
                const createNew: ParticipantModel = new ParticipantModel(participant.name_surname, participant.university, participant.department, participant.email, participant.phone, new Array(...event))
                const result = this._model.create(createNew)
                return result;
            }
            else {
                const event: IEvent = {
                    event_id: eventId,
                    isJoin: false
                }
                var data = res.toObject().events.filter((event: any) => event.event_id == eventId)
                // if(data.length == 0){
                const result = this._model.findOneAndUpdate({ email: participant.email }, { $push: { events: event } })
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