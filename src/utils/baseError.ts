import { environment } from "../config"
import {Response} from "express"
import { UserFacingError } from "./userFacingError"


//*general error class, every error class types are inherited from this*/

export enum ResponseStatus {
    SUCCESS=200,
    CREATED=201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
}
export enum ErrorType{
    UNAUTHORIZED = 'AuthFailureError',
    INTERNAL = 'InternalError',
    NOT_FOUND = 'NotFoundError',
    NO_ENTRY = 'NoEntryError',
    NO_DATA = 'NoDataError',
    BAD_REQUEST = 'BadRequestError',
    FORBIDDEN = 'ForbiddenError'
}
export abstract class BaseError extends Error implements IThrow{
    statusCode: ResponseStatus
    constructor(type:ErrorType,statusCode:ResponseStatus){
        super(type)
        this.statusCode=statusCode
        Error.captureStackTrace(this,BaseError)
    }
    throw(type: ErrorType): BaseError {
        throw new Error("Method not implemented.")
    }
    toString(){
        return `${super.toString()}`
    }
    //* error output for development environment
    private static devErrorOutp(err:BaseError){
        return {
            statusCode:err.statusCode,
            stack:err.stack
        }
    }

    //* error output for production environment
    private static prodErrorOutp(err:BaseError){
        return { 
            statusCode:err.statusCode,
            message:err.toString() 
        }
    }
    public static handle(err:BaseError,res:Response):Response{
        let errorOutp;
        if(environment === 'development'){
            errorOutp=this.devErrorOutp(err);
        }
        else if(environment === 'production'){
            errorOutp=this.prodErrorOutp(err);
        }
        return res.status(err.statusCode).json(errorOutp)
    }
}