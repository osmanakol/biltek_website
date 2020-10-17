import { BaseError, ResponseStatus } from "./baseError";
import {Response,Request} from "express";

export abstract class DatabaseError extends BaseError{
    

    public static async tryCatch(req:Request,res:Response,serviceMethod:any,participantObj:any){
        
        let resStatus= (serviceMethod.toString().substring("create")) ? 201 : 200
        //console.log("resStatus:",resStatus)
        try {
            const result = await serviceMethod(participantObj)
            res.status(resStatus).json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            if(resStatus===201)
                res.status(ResponseStatus.BAD_REQUEST)
            res.json({
                state:"Error",
                message:error.message
            })   
        }
        
    }
    

}