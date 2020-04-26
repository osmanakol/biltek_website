import { IRead } from "../interface/IRead";
import { IWrite } from "../interface/IWrite";
import { Model,Document } from "mongoose";
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{

    public readonly _model:Model<Document>

    constructor(model:Model<Document>) {
        this._model = model;
    }

    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(propert: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }

}