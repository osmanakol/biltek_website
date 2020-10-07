import {Response} from "express"
import { environment } from "../config";
//*general error class, every error class types are inherited from this*/

export abstract class BaseError extends Error{
    statusCode:number
    constructor(message:string,statusCode:number){
        super(message)
        this.name=(this as any).constructor.name
        this.statusCode=statusCode;
        Error.captureStackTrace(this,BaseError)
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

export abstract class DatabaseError extends BaseError{}
export abstract class UserFacingError extends BaseError{}