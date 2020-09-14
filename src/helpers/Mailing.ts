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
      let mail_service = this.email
      mail_service = mail_service.split("@")[1].split(".")[0]
      this.service = mail_service
    }
    
    public openMailer(email:string, email_password:string){
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
    }
    public closeMailer(){
      this.email = ""
      this.email_password = ""
      this.service = ""
      this.transporter.close()
    }
    public createMessage(receiver:string, html:string, subject:string){
      this.message = new MailContent()
      this.message.to = receiver
      this.message.from = this.email
      this.message.subject = subject
      this.message.html = {path: html}
    }

    public sendMail(){
      try{
        setTimeout(() => {
          this.transporter.sendMail(this.message)
          console.log("Mail Succesfully send to " + this.message.to + "adress")
        }, 3000);
        return 1
      } catch(error){
            return 0
        }
    }

    public async sendManyMail(receivers:string[]){
      for(let mail of receivers){
          console.log(mail)
          setTimeout(() =>{
            this.message.to = mail
          },3000)
          
          var sent = await  this.sendMail()
          if(sent){ continue}
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