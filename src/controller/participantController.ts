import { Request, Response, NextFunction } from "express";
import { ParticipantService } from "../services/ParticipantService";
import { ParticipantModel } from "../models/participants/participantsModel";
import { UniversityModel } from "../models/universities/universityModel";

export class ParticipantController {
    public createParticipant = async (req: Request, res: Response, next: NextFunction) => {
        const participantService = new ParticipantService();
        const result = await participantService.create(new ParticipantModel(req.body.name, req.body.surName, new UniversityModel(), req.body.email))
    }
}