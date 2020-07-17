const nodemailer = require("nodemailer");
export  class Mailing{
    private email:string
    private email_password:string
    private service:string
    private transporter:any
    // TODO write better identifying function
    private identifyMailService(){
      var index;
      for (index = 0; index < this.email.length; index++) {
        if(this.email.charAt(index) === '@'){
            index++;
            break;
        }
      }
      this.service += this.email[index].toUpperCase();
      index++;
      while(1){
          if(this.email[index] === '.'){
              break;
          }
          this.service += this.email[index];
          index++;
      }
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
/*admin = new AdminAccount("paaysenur@gmail.com", ".adgjmp.");
var adress=["aysenuryeter@gmail.com","paaysenur@hotmail.com","paaysenur@gmail.com"];
admin.sendMail(adress); */