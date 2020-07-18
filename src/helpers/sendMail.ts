import {Mailing} from "./Mailing"

try{
    let admin = new Mailing("paaysenur@gmail.com", ".adgjmp.");
    var adress=["aysenuryeter@gmail.com","paaysenur@hotmail.com","paaysenur@gmail.com"];
    admin.createMessage(adress, "message.html")
    admin.sendMail(adress);
}
catch(err){
    console.log(err)
}