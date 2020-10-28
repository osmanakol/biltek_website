import { Request, Response ,NextFunction } from "express"
let passport = require("passport")

export const checkAuthenticated = (req:Request, res:Response, next:NextFunction) => { 
  console.log("")
  if(req.isAuthenticated()){
            next()
    }
    res.redirect("/register")
}



export const checkNotAuthenticated = (req:Request, res:Response, next:NextFunction) =>{
  console.log("")  
  if (req.isAuthenticated()) {
      return res.redirect('/login')
    }
    next()
  }