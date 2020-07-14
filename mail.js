"use strict";
const nodemailer = require("nodemailer");
const og = require("./mail_Identifier");
class MailAccount{
  service;
  IdentifyMailService(){
      var index;
      for (index = 0; index < this.user.length; index++) {
         if(this.user.charAt(index) === '@'){
             index++;
             break;
         }
      }
      this.service += this.user[index].toUpperCase();
      index++;
      while(1){
          if(this.user[index] === '.'){
              break;
          }
          this.service += this.user[index];
          index++;
      }
  }
  MailAccount(mail, pass){
      this.user = mail;
      this.pass = pass;
      this.service = "";
      this.IdentifyMailService();
  }
}

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  
  // create reusable transporter object using the default SMTP transports
  
  sender = new MailAccount("kbberkuk@hotmail.com","538320639625aA-");
  let transporter = nodemailer.createTransport({
    service: sender.service,
    auth: {
      user: sender.user,
      pass: sender.pass, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: sender.user, // sender address
    to: "kbberkuk@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Success");

}

main().catch(console.error);