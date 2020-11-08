import { checkSchema } from "express-validator";
import { ISpeaker } from "../speakers/SpeakerSchema";

export interface Date {
    startTime: Date,
    finishTime: Date
}
export class EventModel {


    ///// TODO : Speaker model oluşturulduğunda eklenecek
    constructor(public eventName: string, public speaker:ISpeaker, public img: string, public time: Date, public topic: string,public url:string ,public isActive: boolean = false) { 
        this.eventName=eventName
        this.speaker=speaker
        this.img=img
        this.time=time
        this.topic=topic
        this.url=url
        this.isActive=isActive

    }
}
export const EventValidationChain = checkSchema({

})