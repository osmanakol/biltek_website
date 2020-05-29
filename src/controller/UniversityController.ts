import { UniversityService } from "../services/UniversityService";
import { Request, Response, NextFunction } from "express";
import { UniversityModel } from "../models/universities/universityModel";

export class UniversityController {
    private universityService: UniversityService = new UniversityService();

    public createUniversity = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.universityService.create(new UniversityModel(req.body.name))
            res.status(201).json({
                data: result,
                message: "Ok"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }
    }

    public createUniversities = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.universityService.createMany(new Array<UniversityModel>(...req.body.universities))
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

    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.universityService.findAll()
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

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.universityService.delete(req.body._id);
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

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.universityService.update(req.body._id, new UniversityModel(req.body.universityName));
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

    public findById = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.universityService.findById(req.body._id)
            res.status(200).json({
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