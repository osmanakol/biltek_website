// import nodemailer from "nodemailer";
// import {MailContent} from "./MailContent"
// import { AttachmentLike } from "nodemailer/lib/mailer";
// export  class Mailing{
//     private email:string
//     private email_password:string
//     private service:string
//     private transporter:any
//     private message:MailContent
//     private identifyMailService(){  
//       let mail_service = this.email
//       mail_service = mail_service[0].split("@")[1].split(".")[0]
//       this.service = mail_service
//     }
    
//     constructor(email:string, email_password:string){
//       this.email = email;
//       this.email_password = email_password;
//       this.service = ""
//       this.identifyMailService()
//       this.transporter = nodemailer.createTransport({
//         service: this.service,
//         auth: {
//             user: this.email, 
//             pass: this.email_password, } 
//         });
//     }
//     public createMessage(mailArray:string[], html:string){
//       this.message.bcc = mailArray
//       this.message.from = this.email
//       this.message.html = {path: html}
//     }
//     sendMail(mailArray:string[]){
//       var uzunluk:number, index:number, email:string
//       try{
//         this.transporter.sendMail(this.message)
//         console.log("Success")
//       }
//       catch(err){
//         console.log(err)
//       }
//     }
// }
// /*{
//             from: this.email , 
//             to:email , 
//             subject: "Test",
//             text: "Test",
//             html: {path:"message.html"},
//             attachments:[{
//               filename: "dene.jpg",
//               path: "denemail.jpg",
//             }]
//           } */