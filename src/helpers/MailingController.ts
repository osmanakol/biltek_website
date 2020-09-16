import { Request, Response, NextFunction } from "express";
import {Mailing} from "./Mailing"


export class MailingController{
    private mailing:Mailing;
    constructor(){
        this.mailing = new Mailing()
    }
    public createMailer = async (req: Request, res:Response, next: NextFunction) => {
        try{
        const result = await this.mailing.openMailer(req.body.email, req.body.password)
        res.json({
                data: result,
                state: "Success"
            })
        } catch (error){
            res.json({
                err: error,
                message: "Error"
            })
        }
    }
    public deleteMailer = async (req: Request, res: Response, next: NextFunction) => {
        try{
            this.mailing.closeMailer()
            res.json({
               state: "Success" 
            })
        } catch(error){
            res.json({
                err: error,
                message: "Error"
            })
        }
    }
    public createMail = async (req: Request, res: Response, next: NextFunction) => {
        try{
            this.mailing.createMessage(req.body.receiver, req.body.message, req.body.subject)
            res.json({
               state: "Success" 
            })
        } catch(error){
            res.json({
                err: error,
                message: "Error"
            })
        }
    }
    public sendMail = async (req: Request, res: Response, next: NextFunction) => {
        try{
            this.mailing.sendMail();
            res.json({
               state: "Success" 
            })
        } catch(error){
            res.json({
                err: error,
                message: "Error"
            })
        }
    }
    public sendManyMail = async (req: Request, res: Response, next: NextFunction) => {
        try{
            this.mailing.sendManyMail(req.body.receivers);
            res.json({
               state: "Success" 
            })
        } catch(error){
            res.json({
                err: error,
                message: "Error"
            })
        }
    }
    public addAttachment = async (req: Request, res: Response, next: NextFunction) => {
        try{
            this.mailing.message.addAttachment(req.body.filename, req.body.path);
            res.json({
               state: "Success" 
            })
        } catch(error){
            res.json({
                err: error,
                message: "Error"
            })
        }
    }
    
}
