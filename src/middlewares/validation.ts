import { Request, Response, NextFunction } from "express";
import {validationResult,ValidationChain } from "express-validator";

export const validate=(validations:ValidationChain[])=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        await Promise.all(validations.map(validation => validation.run(req)))//.then(a=>console.log(a));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("error bu\n",errors)
            return res.status(423).json({
                errors:errors.array()
            });
        }
        next();
    };
}