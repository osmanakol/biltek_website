import { Request,Response,NextFunction } from "express";
import { EmployeeModel } from "../models/employees/employeeModel";
import { EmployeeService } from "../services/EmployeeService";

export class EmployeeController{
    private employeeService:EmployeeService

    constructor(){
        this.employeeService=new EmployeeService()
    }

    public create = async (req:Request,res:Response,next:NextFunction) => {
        try {
            const result = await this.employeeService.create(new EmployeeModel(req.body.name_surname,req.body.gender,req.body.company,req.body.contact))
            res.status(201).json({
                data: result,
                status: "Success"
            })
        } catch (error) {
            res.status(400).json({
                err: error,
                status: "Error",
                msg:error.message
            })
        }
    }
    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.employeeService.findAll()
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
