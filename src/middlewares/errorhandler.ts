import { Request,Response,NextFunction } from "express"
import { environment } from "../config"
import { BaseError, ErrorType } from "../utils/baseError"
import { UserFacingError } from "../utils/userFacingError"
import { logger } from "./logger"

export const errorhandler=function(err:Error,req:Request,res:Response,next:NextFunction){
  if(err instanceof BaseError){
    BaseError.handle(err,res)
  }
  else{
    if(environment === 'development'){
      logger.error(`${err}`)
      return res.status(500).json(err.message)
    }
    BaseError.handle(UserFacingError.throw(ErrorType.INTERNAL),res)
  }
}

export const notFoundHandler=function(req:Request,res:Response,next:NextFunction){
  next(UserFacingError.throw(ErrorType.NOT_FOUND))
}