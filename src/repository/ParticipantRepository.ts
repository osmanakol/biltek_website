import { BaseRepository } from "./base/BaseRepository";
import { ParticipantModel, IEvent } from "../models/participants/participantModel";
import { threadId } from "worker_threads";

export class ParticipantRepository extends BaseRepository<ParticipantModel>{
    public addEvent = (eventId:string, participant:ParticipantModel) =>{
        this._model.findOne({email:participant.email},{_id:1},(err)=>{
            if(err)
                return err;
        }).then((res)=>{
            if(res === null){
                const event = new Array()
                event.push({
                    event_id:eventId,
                    isJoin:false
                })
                const createNew:ParticipantModel = new ParticipantModel(participant.FullName,participant.university,participant.department,participant.email,participant.phone,new Array(...event))
                const result = this._model.create(createNew)
                return result;
            }
            else{
                const event:IEvent = {
                    event_id:eventId,
                    isJoin:false
                }
                const result = this._model.findOneAndUpdate({email:participant.email},{$push:{events:event}})
                return result;
            }
        })
    }
}