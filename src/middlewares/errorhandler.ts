import { Request,Response,NextFunction } from "express"
import { environment } from "../config"
import { BaseError } from "../utils/baseError"
import { InternalError, NotFoundError } from "../utils/userFacingError"
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
    BaseError.handle(new InternalError(),res)
  }
}

export const notFoundHandler=function(req:Request,res:Response,next:NextFunction){
  next(new NotFoundError("Page not found"))
}