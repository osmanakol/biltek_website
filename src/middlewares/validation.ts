import { Request, Response, NextFunction } from "express";
import {validationResult,ValidationChain } from "express-validator";
import { logger } from "./logger";

export const validate=(validations:ValidationChain[])=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        await Promise.all(validations.map(validation => validation.run(req)))
        const errors = validationResult(req);
        let warnings="";
        if (!errors.isEmpty()) {
            for (let index = 0; index < errors.array().length; index++) {
                 warnings=warnings.concat(`(param:${errors.array()[index].param}) ${errors.array()[index].msg} `)
            }
            logger.warn(warnings)
            res.status(422).json({
                errors:errors.array()
            });
        }
        else{
            next();
        }
    };
}