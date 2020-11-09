import { Request, Response ,NextFunction } from "express"
let passport = require("passport")
import {AdminController} from "../controller/AdminController"
import { AdminService } from "../services/AdminService"
import { cookieExtractor } from "../lib/utils"
import {decode} from "jsonwebtoken"




export const isPriveleged = 
  async (req:Request, res:Response, next:NextFunction) => { 
    try{
      let controller = new AdminService()
      //console.log(req.method)  
      
      // get request type
      let route = req.originalUrl; // "/register"  "/home2"
       let method = req.method; // "GET" "POST" "PUT"

      // get user
      let token = decode(cookieExtractor(req))
      let user = await controller.findById(token.sub)
      
      let privelege = false
      if(route === "/partipicant"){
        if(method === "GET"){
          privelege = user.options.canSeePartipicants;
        } 
        else if( method === "POST" || method === "PUT" || method === "DELETE"){
          privelege = user.options.canUpdatePartipicants
        }
      }
      /*if(route === "/admins"){
        if(method === "GET"){
          let privelege = user.options.canSeeAdmins;
        } 
        else if( method === "POST" || method === "PUT" || method === "DELETE"){
          let privelege = user.options.canChangeAdmins
        }
      }*/
      else if(route === "/event"){
        if(method === "GET"){
           privelege = user.options.canSeeEvents;
        } 
        else if( method === "POST" || method === "PUT" || method === "DELETE"){
           privelege = user.options.canChangeEvents
        }
      }
      if(privelege)
        next()
      else
        throw Error;
        
      }catch(err){
      res.sendStatus(401)
    }
}


