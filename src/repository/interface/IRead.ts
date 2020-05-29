import { Document, DocumentQuery } from "mongoose";

export interface IRead<T> {
    /**
     * @function @async
     * @returns type of Document array
     */
    findAll(): Promise<T[]>;
    /**
     * ! probably function will be edit 
     * @param property
     * @returns  
     */
    findOne(property: any): Promise<Document>;
    /**
     * @function @async
     * @param id
     * @returns type of T data 
     */
    findById(id: string): Promise<T | null>;
}