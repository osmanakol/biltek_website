import { BaseRepository } from "./base/BaseRepository";
import { TModel } from "../models/tModel";

export class TRepository extends BaseRepository<TModel>{


    public fid =async (model:TModel) =>{
        try {
            const result = await this._model.findOne({email:model.email})
            if(result){
                const error:Error = new Error("Yalnızca bir takıma başvuru yapabilirsiniz.")
                return Promise.reject(error)
            }
            else{
                return await this._model.create(model)
            }
        } catch (error) {
            return Promise.reject(error)
        }
    }
    
}