import { UniversityService } from "../services/UniversityService";
import { Request,Response, NextFunction } from "express";
import { UniversityModel } from "../models/universities/universityModel";

export class UniversityController{
    private universityService:UniversityService = new UniversityService();

    public createUniversity = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.universityService.create(new UniversityModel(req.body.name))
            res.status(201).json({
                data:result,
                message:"Ok"
            })
        } catch (error) {
            res.json({
                err:error,
                message:"Bir hata oluştu"
            })
        }
    }
}