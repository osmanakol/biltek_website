import { Request, Response, NextFunction } from "express";
import { AdminService } from "../services/AdminService";
import { AdminModel } from "../models/admins/adminModel";
import { hash } from "bcrypt"
export class AdminController {
    private AdminService: AdminService

    constructor() {
        this.AdminService = new AdminService()
    }

    public createAdmin = async (req:Request, res: Response, next: NextFunction) => {
        const adminObj = new AdminModel(req.body.name, await hash(req.body.password, 10))
        try {
            const result = await this.AdminService.create(adminObj)
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
    public findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.AdminService.findById(req.body._id)
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
    public findByName = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.AdminService.findById(req.body.name)
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