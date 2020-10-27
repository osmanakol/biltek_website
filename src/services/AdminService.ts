import { AdminRepository } from "../repository/AdminRepository";
import AdminDbModel from "../models/admins/adminSchema";
import { AdminModel } from "../models/admins/adminModel";

export class AdminService {
    private repository = new AdminRepository(AdminDbModel)
    constructor() { }


    public create = async (item: AdminModel) => {
        const result = await this.repository.create(item);
        return result;
    }

    public findById = async(id:string)=>{
        const result = await this.repository.findById(id);
        return result;
    }
    
    public findByName = async(name:string) => {
        const result = await this.repository.findByName(name);
        return result;
    }
}