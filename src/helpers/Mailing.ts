import nodemailer from "nodemailer";
import {MailContent} from "./MailContent"
import { AttachmentLike } from "nodemailer/lib/mailer";
export  class Mailing{
    private email:string
    private email_password:string
    private service:string
    private transporter:any
    public message:MailContent
    constructor() { }
    private setReceiver(receiver: string){
        this.message.to = receiver
    }
    private identifyMailService(){  
      try
      {
      let mail_service = this.email
      mail_service = mail_service.split("@")[1].split(".")[0]
      this.service = mail_service
    }catch(error){
      return error
    }
    }
    
    public openMailer(email:string, email_password:string){
      //try{
      console.log("Creating/Updating Mailer")
      this.email = email;
      this.email_password = email_password;
      this.service = ""
      this.identifyMailService()
      this.transporter = nodemailer.createTransport({
        service: this.service,
        auth: {
            user: this.email, 
            pass: this.email_password, } 
        });
      /*} catch(error){
        return error
      }*/
    }
    public closeMailer(){
      try{
        console.log("Closing Mailer")
      this.email = null
      this.email_password = null
      this.service = null
      this.transporter.close()
    }catch(error){
      return error
    }

    }
    public createMessage(receiver:string, html:string, subject:string){
      try
      {
      this.message = new MailContent()
      this.message.to = receiver
      this.message.from = this.email
      this.message.subject = subject
      this.message.html = {path: html}
    }catch(error){
      return error
    }
    }

    public sendMail(){
      try{
        this.message.bcc = null
        this.transporter.sendMail(this.message)
        console.log("Mail Succesfully send to " + this.message.to + " adress")
      } catch(error){
            return error
        }
    }

    public sendManyMail(receivers:string[]){
      try{
      this.message.bcc = receivers
      this.message.to = null
      this.transporter.sendMail(this.message)
      } catch(error){
        return error
      }
    }

}
/*{
            from: this.email , 
            to:email , 
            subject: "Test",
            text: "Test",
            html: {path:"message.html"},
            attachments:[{
              filename: "dene.jpg",
              path: "denemail.jpg",
            }]
          } */