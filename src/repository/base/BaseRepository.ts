import { IRead } from "../interface/IRead";
import { IWrite } from "../interface/IWrite";
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{
    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(propert: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    create(item: T): Promise<import("mongoose").Document> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}