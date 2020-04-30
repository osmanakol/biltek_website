import { Request, Response, NextFunction } from "express";
import { ParticipantService } from "../services/ParticipantService";
import { ParticipantModel } from "../models/participants/participantModel";
import { UniversityModel } from "../models/universities/universityModel";

export class ParticipantController {
    public createParticipant = async (req: Request, res: Response, next: NextFunction) => {
        const participantService = new ParticipantService();
        console.log(req.body);
        const result = await participantService.create(new ParticipantModel(req.body.name, req.body.surName, new UniversityModel(req.body.universityModel.name), req.body.email)).then((result) => {
            res.status(201).json({
                data: result,
                message: "OK"
            })
        }).catch(err => {
            res.json({
                err:err,
                message: "Bir hata oluştu"
            })
        })
    }
}