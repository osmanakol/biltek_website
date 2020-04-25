export interface IRead<T>{
    findAll():Promise<T[]>;
    findOne(propert:any):Promise<T>;
    findById(id:string):Promise<T>;
}