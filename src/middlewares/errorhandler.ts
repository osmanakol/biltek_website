import { Request,Response,NextFunction } from "express"
import { logger } from "./logger"


export enum ErrorType{
  UNAUTHORIZED = 'AuthFailureError',
  INTERNAL = 'InternalError',
  NOT_FOUND = 'NotFoundError',
  NO_ENTRY = 'NoEntryError',
  NO_DATA = 'NoDataError',
  BAD_REQUEST = 'BadRequestError',
  FORBIDDEN = 'ForbiddenError'
}

enum ResponseStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

abstract class UserFacingError extends Error {
  constructor(public type:ErrorType,public message:string){
    super(type)
  }

  public static handle(err:UserFacingError,res:Response):Response{
    switch(err.type){
      case ErrorType.NOT_FOUND:
      case ErrorType.NO_DATA:
      case ErrorType.NO_ENTRY:
        return this.errorsOutput(err,res,ResponseStatus.NOT_FOUND)
      case ErrorType.INTERNAL:
        return this.errorsOutput(err,res,ResponseStatus.INTERNAL_ERROR)
      case ErrorType.UNAUTHORIZED:
        return this.errorsOutput(err,res,ResponseStatus.UNAUTHORIZED)
      case ErrorType.BAD_REQUEST:
        return this.errorsOutput(err,res,ResponseStatus.BAD_REQUEST)
    }
  }

  private static errorsOutput(err:UserFacingError,res:Response,resStatus:ResponseStatus){
    return res.json({
      status:resStatus,
      message:err.message,
      type:err.type
    })
  }
}

export class NotFoundError extends UserFacingError{
  constructor(message="Not Found"){
    super(ErrorType.NOT_FOUND,message);
  }

}
class InternalError extends UserFacingError{
  constructor(message="internal error"){
    super(ErrorType.INTERNAL,message)
  }
}
class UnauthError extends UserFacingError{
  constructor(message="unauthorized"){
    super(ErrorType.UNAUTHORIZED,message)
  }
}

class BadRequestError extends UserFacingError{
  constructor(message:string){
    super(ErrorType.BAD_REQUEST,message)
  }
}

//error handling middleware

export const errorhandler=function (err:Error,req:Request,res:Response,next:NextFunction){
  console.log("res.status,",res.statusCode)
  if(err instanceof UserFacingError)
      UserFacingError.handle(err,res)
  else{
      logger.error(err)
      UserFacingError.handle(new InternalError(),res)
  }
}