import { Request, Response, NextFunction } from "express";
import { ParticipantService } from "../services/ParticipantService";
import { ParticipantModel } from "../models/participants/participantModel";
import { UniversityModel } from "../models/universities/universityModel";

export class ParticipantController {
    private participantService: ParticipantService;

    constructor() {
        this.participantService = new ParticipantService()
    }
    public createParticipant = async (req: Request, res: Response, next: NextFunction) => {

        const result = await this.participantService.create(new ParticipantModel(req.body.name_surname, req.body.universityId,req.body.departmentId, req.body.email)).then((result) => {
            res.status(201).json({
                data: result,
                message: "OK"
            })
        }).catch(err => {
            res.json({
                err: err,
                message: "Bir hata oluştu"
            })
        })
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
            const result = await this.participantService.update(req.body._id, new ParticipantModel(req.body.name, req.body.surName, req.body.universityId,req.body.departmentId, req.body.email))
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
                result:result,
                state:"Success"
            })
        } catch (error) {
            res.json({
                err:error,
                state:"Error"
            })
        }
    }

    public findAll = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.participantService.findAll()
            res.json({
                data:result,
                state:"Success"
            })
        } catch (error) {
            res.json({
                err:error,
                state:"Error"
            })
        }
    }

    public findById = async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.participantService.findById(req.body._id)
            res.json({
                data:result,
                state:"Success"
            })
        } catch (error) {
            res.json({
                err:error,
                state:"Error"
            })
        }
    }
}