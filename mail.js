require(["Adminaccount.js"], function(){
    og = new AdminAccount("paaysenur@gmail.com", ".adgjmp.");
    var adress=["aysenuryeter@gmail.com","paaysenur@hotmail.com","paaysenur@gmail.com"];
    og.sendMail(adress);
    console.log(og.email, og.email_password, og.service);
});
