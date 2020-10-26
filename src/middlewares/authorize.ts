import { Request, Response ,NextFunction } from "express"
import  passport from"passport"

export const checkAuthenticated = (authLevel:number) => {
    return (req:Request, res:Response, next:NextFunction) => {
        if(req.isAuthenticated()){
            next()
        }
    }
}


export const checkNotAuthenticated = (req:Request, res:Response, next:NextFunction) =>{
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }