import { IRead } from "../interface/IRead";
import { IWrite } from "../interface/IWrite";
import { Model, Document, DocumentQuery } from "mongoose";
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{

    public readonly _model: Model<Document>

    /**
     * @constructor
     * @param model is exporting to models file
     */

    constructor(model: Model<Document>) {
        this._model = model;
    }

    //! That functions commets line is in the their interface file (IRead and IWrite)

    createMany(item: T[]): Promise<Document[]> {
        const result = this._model.create(item);
        return result;
    }

    async findAll(): Promise<T[]> {
        const result = await this._model.find().lean()
        return result as unknown as T[]
    }

    findOne(property: any): Promise<Document> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<T | null> {
        const result = await this._model.findById({ "_id": id });
        return result as unknown as T
    }

    create(item: T): Promise<Document> {
        const result = this._model.create(item);
        return result;
    }

    update(id: string, item: T): Promise<Document> {
        const result =  this._model.update({ "_id": id }, item);
        return result as any;
    }

    delete(id: string): Promise<boolean> {
        const result = this._model.deleteOne({ "_id": id });
        return result as any;
    }
}