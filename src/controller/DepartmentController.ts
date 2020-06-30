import { DepartmentService } from "../services/DepartmentService";
import { Request, Response, NextFunction } from "express";
import { DepartmentModel } from "../models/departmentOfUniversity/departmentModel";
import { UniversityService } from "../services/UniversityService";

export class DepartmentController {
    private departmentService: DepartmentService

    constructor() {
        this.departmentService = new DepartmentService();
    }

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.departmentService.create(new DepartmentModel(req.body.departmentName, req.body.universityId))
            res.json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                message: "Bir problem oluştu"
            })
        }
    }


    public createMany = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.departmentService.createMany(new Array<DepartmentModel>(...req.body.deparments))
            res.json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                message: "Bir hata oluştu"
            })
        }
    }

    public update = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.departmentService.update(req.body._id,new DepartmentModel(req.body.deparmentName,req.body.universityId))
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

    public delete = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.departmentService.delete(req.body._id)
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

    public findAll= async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.departmentService.findAll()
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

    public findById = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = await this.departmentService.findById(req.body._id)
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

    public getDepartmentsByUniversityId = (req:Request,res:Response,next:NextFunction)=>{
        try {
            const result = this.departmentService.getDepartmentsById(req.query.universityId.toString()).sort({"departmentName":1}).collation({"locale":"tr"}).lean().exec();
            result.then((departments)=>{
                res.status(200).json({
                    data:departments,
                    state:"Success"
                })
            })
       
        } catch (error) {
            res.json({
                err:error,
                state:"Error"
            })
        }
    } 
}