import { UniversityRepository } from "../repository/UniversityRepository";
import UniversityDbModel from "../models/universities/universitySchema";
import { UniversityModel } from "../models/universities/universityModel";

export class UniversityService {
    private repository: UniversityRepository = new UniversityRepository(UniversityDbModel);

    constructor() {

    }

    public create = async (item: UniversityModel) => {
        console.log("Service");
        const result = await this.repository.create(item);
        return result;
    }

    public update = async (id:string,item:UniversityModel) =>{
        const result = await this.repository.update(id,item);
        return result;
    }

    public delete = async (id:string)=>{
        const result = await this.repository.delete(id);
        return result;
    }

    public createMany = async (item: UniversityModel[]) => {
        console.log("Service");
        const result = await this.repository.createMany(item);
        console.log(result);
        return result;
    }

    public findById = async (id:string)=>{
        const result = await this.repository.findById(id);
        return result;
    }

    public findAll = async ()=>{
        console.log("Service")
        const result = await this.repository.findAll();
        return result;
    }

}