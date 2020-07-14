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
x =  MailAccount("kbberkuk@gmail.com", "4358675476");
console.log(x.user);
console.log(x.pass);
console.log(x.service)