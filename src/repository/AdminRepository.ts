import { BaseRepository } from "./base/BaseRepository";
import { AdminModel } from "../models/admins/adminModel";


export class AdminRepository extends BaseRepository<AdminModel>{
    public findByName = async (name:string) => {
        const result = await this._model.findById({ "name": name });
        return result as unknown as AdminModel
    }
}