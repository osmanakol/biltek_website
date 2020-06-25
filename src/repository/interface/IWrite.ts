
import { Document } from "mongoose";


export interface IWrite<T>{
    /**
     * @function @async 
     * @param item[] 
     * @return Document[] what is created
     * ? create more then one data in database on one time
     */
    createMany(item:T[]):Promise<T[]>;
    /**
     * @function @async
     * @param item 
     * @return Document what is created
     * ? create a data in database
     */
    create(item:T):Promise<Document>;
    /**
     * @function @async
     * @param id which document you want to update
     * @param item update value
     * @return Document which is updated 
     * ? update any document in database
     */
    update(id:string,item:T):Promise<Document>

    /**
     * @function @async
     * @param id which document you want to delete
     * @returns boolean result about delete process
     * ? delete any document in database
     */
    delete(id:string):Promise<boolean>;
}