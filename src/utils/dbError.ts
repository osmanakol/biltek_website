import { BaseError, ErrorType, ResponseStatus } from "./baseError";

export class DatabaseError extends BaseError {
    constructor(type:ErrorType,statusCode:ResponseStatus,message?:string){
        super(type,statusCode,message)
    }
    //method overriding
    static throw(type:any,message?:string): BaseError{
        //!! incomplete implementation
        let statusCode=ResponseStatus.INTERNAL_ERROR

        if(type===ErrorType.BAD_REQUEST){
            statusCode=ResponseStatus.BAD_REQUEST
        }
        return new DatabaseError(type,statusCode,message)

    }
}