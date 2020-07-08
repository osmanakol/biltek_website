import { Request, Response, NextFunction } from "express";
import {checkSchema,validationResult } from "express-validator";
import {registerSchema } from "./validationSchemas";

export const registerValidationRules = checkSchema(registerSchema)

export const validate=(req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req);
        console.log("errors neymis,\n")
        if (!errors.isEmpty()) {
            console.log("error bu\n", errors)
            return res.status(421).json({
                errors:errors.array()
            });
        }
        next();
}