const nodemailer = require("nodemailer");
export  class Mailing{
    private email:string
    private email_password:string
    private service:string
    private transporter:any
    private identifyMailService(){
      let mail_service = this.email
      mail_service = mail_service[0].split("@")[1].split(".")[0]
      this.service = mail_service
    }

    constructor(email:string, email_password:string){
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

    async sendMail(mailArray:string[]){
      var uzunluk:number, index:number, email:string
      for (index = 0 , uzunluk = mailArray.length; index < uzunluk; index++){
        try{
          email = mailArray[index];
          let info =   setTimeout(this.transporter.sendMail({
            from: this.email , 
            to:email , 
            subject: "Test",
            text: "Test",
            html: {path:"message.html"},
            attachments:[{
              filename: "dene.jpg",
              path: "denemail.jpg",
            }]
          }),
          2000)
          console.log("E-posta "+email+" adresine başarıyla gönderildi.")
        }
      catch(err){
        console.log(err)
      }
    }
  }
}