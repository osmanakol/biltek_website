const nodemailer = require("nodemailer");
const { ModuleResolutionKind } = require("typescript");
const { Module } = require("module");
 class AdminAccount{
  identifyMailService(){
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
  constructor(email, email_password){
      this.email = email;
      this.email_password = email_password;
      this.service = ""
      this.identifyMailService()
      this.transporter = nodemailer.createTransport({
        service: this.service,
        auth: {
            user: this.email, 
            pass: this.email_password, 
        }});
  }

  async sendMail(mailArray){
    var uzunluk, indexs, user_email
    for (indexs = 0 , uzunluk = mailArray.length; indexs < uzunluk; indexs++){
      try{
      user_email = mailArray[indexs];
      let info = await  this.transporter.sendMail({
      from: this.email , 
      to:user_email , 
      subject: "Test",
      text: "Test",
      html: {path:"maildene.html"},
      attachments:[{
        filename: "dene.jpg",
        path: "denemail.jpg",
      }]
  })
  console.log("E-posta "+user_email+" adresine başarıyla gönderildi.")
}
catch(err){
  console.log(err)
}}}}

admin= new AdminAccount("paaysenur@gmail.com", ".adgjmp.");
    var adress=["aysenuryeter@gmail.com","paaysenur@hotmail.com","paaysenur@gmail.com","kbberkuk@gmail.com"];
    admin.sendMail(adress);
    // console.log(admin.email, admin.email_password, admin.service);