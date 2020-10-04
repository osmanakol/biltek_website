import { Request, Response, NextFunction } from "express";
import { ParticipantService } from "../services/ParticipantService";
import { ParticipantModel } from "../models/participants/participantModel";

export class ParticipantController {
    private participantService: ParticipantService;

    constructor() {
        this.participantService = new ParticipantService()
    }

    public createParticipant = async (req: Request, res: Response, next: NextFunction) => {
        const participantObj = new ParticipantModel(req.body.name_surname, req.body.university, req.body.department, req.body.email, req.body.phone)
        try {
            const result = await this.participantService.create(participantObj)
            res.status(201).json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.status(400).json({
                state:"Error",
                message:error.message
            })   
        }
    }


    public createManyParticipant = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.participantService.createMany(new Array<ParticipantModel>(...req.body.participants))
            res.status(201).json({
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

    public updateParticipant = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.participantService.update(req.body._id, new ParticipantModel(req.body.name, req.body.surName, req.body.universityId, req.body.departmentId, req.body.email))
            res.status(200).json({
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

    public deleteParticipant = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.participantService.delete(req.body._id)
            res.status(200).json({
                result: result,
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
            const result = await this.participantService.findAll()
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

    public findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.participantService.findById(req.body._id)
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

    public addEvent = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.participantService.addEvent(req.body.eventId,new ParticipantModel(req.body.name_surname,req.body.university,req.body.department,req.body.email,req.body.phone));
            console.log("try dayım",result)
            res.json({
                data:result,
                state:"Success"
            })
        } catch (error) {
            console.log("bura geldim",error)
            res.json({
                err:error,
                state:"Error"
            })
        }
    }
}