
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
}

export abstract class DatabaseError extends BaseError{}
export abstract class UserFacingError extends BaseError{}