import { EmployeeModel } from "../models/employees/employeeModel";
import EmployeeDBModel from "../models/employees/employeeSchema";
import { EmployeeRepository } from "../repository/EmployeeRepository";

export class EmployeeService{

    private repository=new EmployeeRepository(EmployeeDBModel)

    constructor(){}

    public create = async (item: EmployeeModel) => {

        const result = await this.repository.create(item);
        return result;
    }

    public createMany = async (item: EmployeeModel[]) => {
        console.log("Service,createmany")
        const result = await this.repository.createMany(item)
        return result;
    }

    public update = async (id: string, item: EmployeeModel) => {
        const result = await this.repository.update(id, item);
        return result;
    }

    public delete = async (id: string) => {
        const result = await this.repository.delete(id);
        return result;
    }

    public findAll = async () => {
        const result = await this.repository.findAll()
        return result;
    }


}