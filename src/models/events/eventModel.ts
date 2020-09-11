import { checkSchema } from "express-validator";

export interface Date {
    startTime: Date,
    finishTime: Date
}
export class EventModel {


    // TODO : Speaker model oluşturulduğunda eklenecek
    constructor(public eventName: string, public speaker: string, public img: string, public time: Date, public topic: string, public isActive: boolean = false) { }
}
export const EventValidationChain = checkSchema({

})