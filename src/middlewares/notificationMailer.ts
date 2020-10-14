import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";


export const sendNotificationMail = () => { 
    return async (req:Request,res:Response,next:NextFunction)=>{
        let mailer = nodemailer.createTransport({
            service: process.env.MAIL.split("@")[1].split(".")[0],
        auth: {
            user: process.env.MAIL, 
            pass: process.env.PASS} 
        });
        await mailer.sendMail({
            from: process.env.MAIL,
            to: req.body.email,
            subject:"deneme",
            html: {path:"./src/middlewares/message.html"}
        })
    }   
}