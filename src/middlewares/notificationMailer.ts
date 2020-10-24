import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";


export const sendNotificationMail = () => { 
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            let mailer = nodemailer.createTransport({
                service:process.env.service,
                //service: process.env.MAIL.split("@")[1].split(".")[0],
            auth: {
                user: process.env.MAIL, 
                pass: process.env.PASS} 
            });
            mailer.verify((err,success)=>{
                console.log(err)
                console.log(success)
            })
            await mailer.sendMail({
                from: process.env.MAIL,
                to: req.body.email,
                subject:"deneme",
                html: {path:"./src/middlewares/message.html"}
            })
        } catch(err){
            console.log(err)
        }
    }   
}