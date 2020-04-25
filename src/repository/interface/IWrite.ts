import { Document } from "mongoose";

interface IWrite<T>{
    create(item:T):Promise<Document>;
    update(id:string,item:T):Promise<boolean>
    delete(id:string):Promise<boolean>;
}