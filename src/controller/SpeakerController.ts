import { Request,Response,NextFunction } from "express";
import { SpeakerModel } from "../models/speakers/SpeakerModel";
import { SpeakerService } from "../services/SpeakerService";

export class SpeakerController{
    private speakerService:SpeakerService

    constructor(){
        this.speakerService=new SpeakerService()
    }
    public create = async (req:Request,res:Response,next:NextFunction) => {
        try {
            console.log(req.body)
            const result = await this.speakerService.create(new SpeakerModel(req.body.employee,req.body.events))
            console.log(result)
            res.status(201).json({
                data: result,
                status: "Success"
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                err: error,
                status: "Error",
                msg:error.message
            })
        }
    }
    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.speakerService.findAll()
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