import { UniversityRepository } from "../repository/UniversityRepository";
import UniversityDbModel from "../models/universities/universitySchema";
import { UniversityModel } from "../models/universities/universityModel";

export class UniversityService {
    private universityRepository: UniversityRepository = new UniversityRepository(UniversityDbModel);

    constructor() {

    }

    public create = async (item: UniversityModel) => {
        console.log("Service");
        const result = await this.universityRepository.create(item);
        return result;
    }

    public createMany = async (item: UniversityModel[]) => {
        console.log("Service");
        const result = await this.universityRepository.createMany(item);
        console.log(result);
        return result;
    }

}