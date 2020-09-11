import { EventService } from "../services/EventService."
import { Request, Response, NextFunction } from "express"
import { EventModel } from "../models/events/eventModel"

export class EventController {
    private eventService: EventService

    constructor() {
        this.eventService = new EventService()
    }

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.eventService.create(new EventModel(req.body.eventName, req.body.speaker, req.body.img, req.body.time, req.body.topic,req.body.url,req.body.isActive))

            res.json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.eventService.update(req.body._id, new EventModel(req.body.eventName, req.body.speaker, req.body.img, req.body.date, req.body.topic,req.body.isActive))
            res.json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }

    }

    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.eventService.findAll()
            res.json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }
    }
}