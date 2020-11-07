import { Request, Response ,NextFunction } from "express"
let passport = require("passport")
import {AdminController} from "../controller/AdminController"
import { AdminService } from "../services/AdminService"
import { cookieExtractor } from "../lib/utils"
import {decode} from "jsonwebtoken"

export const isAuthorized = 
  async (req:Request, res:Response, next:NextFunction) => { 
    let controller = new AdminService()
    if(req.originalUrl == "/") 
      var requiredLevel = 4
    else if (req.originalUrl == "/home2") 
      var requiredLevel = 5
    //console.log(req.method)  "GET" "POST" "PUT"
    var token = decode(cookieExtractor(req))
    var user = await controller.findById(token.sub)
    if(requiredLevel <= user.authLevel) 
      next()
    else 
      res.redirect("/login")
}


