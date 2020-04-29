import { IRead } from "../interface/IRead";
import { IWrite } from "../interface/IWrite";
import { Model,Document } from "mongoose";
import { STATUS_CODES } from "http";
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{
    
    public readonly _model:Model<Document>

    /**
     * @constructor
     * @param model is exporting to models file
     */

    constructor(model:Model<Document>) {
        this._model = model;
    }

    //! That functions commets line is in the their interface file (IRead and IWrite)

    createMany(item: T[]): Promise<Document[]> {
        const result = this._model.create(item);
        return result;
    }

    findAll(): Promise<T[]> {
        const result = this._model.find({})
        return result.cast(this._model);
    }

    findOne(property: any): Promise<T> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<T> {
        const result = this._model.findById({"_id":id});
        return result.cast(this._model);
    }

    create(item: T): Promise<Document> {
        const result = this._model.create(item);
        return result;
    }
    
    update(id: string, item: T): Promise<Document> {
        const result = this._model.update({"_id":id},item);
        console.log(result);
        return result as any;
    }

    delete(id: string): Promise<boolean> {
        const result = this._model.deleteOne({"_id":id});
        return result as any;
    }
}