import { BaseRepository } from "./base/BaseRepository";
import { ParticipantModel, IEvent } from "../models/participants/participantModel";


export class ParticipantRepository extends BaseRepository<ParticipantModel>{

    private findByEmail = async (model: ParticipantModel) => {
        const result = await this._model.findOne({ email: model.email }, { _id: 1, events: 1, teams: 1 })
        return result;
    }

    private updateParticipant = async (event: IEvent, email: string) => {
        const result = await this._model.findOneAndUpdate({ email: email }, { $push: { events: event } })
        return result
    }
    public addEvent = async (eventId: string, participant: ParticipantModel) => {

        try {
            const mongoParticipant = await this.findByEmail(participant);
            if (mongoParticipant !== null) {
                const event: IEvent = {
                    event_id: eventId,
                    isJoin: false
                }
                const test = mongoParticipant.toObject().events.filter((event: any) => event.event_id == eventId)
                console.log(test)
                if(test.length){
                    const error:Error = new Error("Bu etkinliğine kaydınız bulunmaktadır.")
                    return Promise.reject(error)
                }
                const result = await this._model.findOneAndUpdate({ email: participant.email }, { $push: { events: event } })
                return result 
            }
            else{
                const event = new Array()
                event.push({
                    event_id: eventId,
                    isJoin: false
                })
                const createNew: ParticipantModel = new ParticipantModel(participant.name_surname, participant.university, participant.department, participant.email, participant.phone, new Array(...event))
                const result = await this._model.create(createNew)
                return result;
            }

        } catch (error) {
            return error
        }
        /*
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
        })*/
    }
}