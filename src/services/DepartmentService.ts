import { DepartmentRepository } from "../repository/DepartmentRepository";
import DepartmentDbModel from "../models/departmentOfUniversity/departmentSchema";
import { DepartmentModel } from "../models/departmentOfUniversity/departmentModel";

export class DepartmentService{
    private repository:DepartmentRepository = new DepartmentRepository(DepartmentDbModel);

    constructor() {
        
    }

    public create = async (item:DepartmentModel)=>{
        console.log("Service")
        const result = await this.repository.create(item)
        return result;
    }

    public createMany = async (item:DepartmentModel[])=>{
        console.log("Service");
        const result = await this.repository.createMany(item);
        return result;
    }

    public update = async (id:string,item:DepartmentModel)=>{
        console.log("Service")
        const result = await this.repository.update(id,item)
        return result
    }

    public delete = async (id:string)=>{
        console.log("Service")
        const result = await this.repository.delete(id)
        return result
    }

    public findAll = async ()=>{
        console.log("Service")
        const result = await this.repository.findAll()
        return result;
    }

    public findById = async(id:string)=>{
        console.log("Service")
        const result = await this.repository.findById(id)
        return result
    }

    public getDepartmentsById = (universityId:string)=>{
        const result = this.repository.getDeparmentsById(universityId);
        return result;
    }
}