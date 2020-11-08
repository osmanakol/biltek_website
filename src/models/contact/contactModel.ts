import { checkSchema } from "express-validator";

export class ContactModel{
    public address:string
    public phone?:string
    public email:string
    public socialmedias?:Map<string,string>

    constructor(address:string,email:string,phone?:string,socialmedias?:Map<string,string>)
    {
        this.address=address;
        this.email=email;
        this.phone=phone;
        this.socialmedias=socialmedias;
    }

    public get contactInfos():string{
        return "Contacts:\n"+"email:"+this.email+"\nphone"+this.phone+"\nsocial media accounts"+this.socialmedias;

    }


}


//??contact validation required

export const ContactValidationChain=checkSchema({})