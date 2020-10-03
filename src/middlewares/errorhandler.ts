import { Request,Response,NextFunction } from "express"


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
        return res.json({
          errors:{
            status:ResponseStatus.NOT_FOUND,
            message:err.message,
            type:err.type
          }
        })
      case ErrorType.INTERNAL:
        return res.json({
          errors:{
            status:ResponseStatus.INTERNAL_ERROR,
            message:err.message,
            type:err.type
          }
        })
      case ErrorType.UNAUTHORIZED:
        return res.json({
          errors:{
            status:ResponseStatus.UNAUTHORIZED,
            message:err.message,
            type:err.type
          }
        })
      case ErrorType.BAD_REQUEST:
        return res.json({
          errors:{
            status:ResponseStatus.BAD_REQUEST,
            message:err.message,
            type:err.type
          }
        })
    }
  }
}

class NotFoundError extends UserFacingError{
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


