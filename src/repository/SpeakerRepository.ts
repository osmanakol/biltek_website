import { IEvent } from "../models/participants/participantModel";
import { SpeakerModel } from "../models/speakers/SpeakerModel";
import { BaseRepository } from "./base/BaseRepository";

export class SpeakerRepository extends BaseRepository<SpeakerModel>{
    
    private findByName = async (model:SpeakerModel) =>{
        const result= await this._model.findOne({name_surname:model.name_surname})
        return result    
    }
    private updateSpeaker=async(event:IEvent,name_surname:string)=>{
        const result= this._model.findByIdAndUpdate({name_surname:name_surname},{$push:{event:event}})
        return result
    }
    //! speaker için addEvent gibi fonksiyon gerekli mi?

}