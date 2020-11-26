import { IEvent } from "../models/participants/participantModel";
import { SpeakerModel } from "../models/speakers/SpeakerModel";
import { BaseRepository } from "./base/BaseRepository";

export class SpeakerRepository extends BaseRepository<SpeakerModel>{
    
    private findByEmail = async (model:SpeakerModel) =>{
        const result= await this._model.findOne({email:model.contact.mail})
        return result    
    }
    private updateSpeaker=async(event:IEvent,email:string)=>{
        const result= this._model.findByIdAndUpdate({email:email},{$push:{event:event}})
        return result
    }

}