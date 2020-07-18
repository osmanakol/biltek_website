import { Request, Response, NextFunction } from "express";
import { ParticipantService } from "../services/ParticipantService";
import { ParticipantModel } from "../models/participants/participantModel";
import { UniversityModel } from "../models/universities/universityModel";
import { validationResult } from "express-validator";

export class ParticipantController {
    private participantService: ParticipantService;

    constructor() {
        this.participantService = new ParticipantService()
    }

    public createParticipant = async (req: Request, res: Response, next: NextFunction) => {
        console.log("error yok devam")
        const participantObj = new ParticipantModel(req.body.name_surname, req.body.university, req.body.department, req.body.email, req.body.phone)
        try {
            const result = await this.participantService.create(participantObj)
            res.status(201).json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.status(200).json({
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
}