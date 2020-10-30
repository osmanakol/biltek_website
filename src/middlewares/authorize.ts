import { Request, Response ,NextFunction } from "express"
let passport = require("passport")
import {AdminController} from "../controller/AdminController"
import { AdminService } from "../services/AdminService"
export const checkAuthenticated = (req:Request, res:Response, next:NextFunction) => { 
  console.log("")
  if(req.isAuthenticated()){
            next()
    }
    res.redirect("/register")
}
export const isAuthorized = 
  (req:Request, res:Response, next:NextFunction) => { 
    let controller = new AdminService()
    if(req.cookies['jwt'].authLevel < authorizationLevel) res.redirect("/")
    else next()
}



export const checkNotAuthenticated = (req:Request, res:Response, next:NextFunction) =>{
  console.log("")  
  if (req.isAuthenticated()) {
      return res.redirect('/login')
    }
    next()
  }