import Mail, { Attachment, AttachmentLike } from "nodemailer/lib/mailer/index"
import { Url } from "url"
export class MailContent implements Mail.Options{
    public from:string
    public to:string
    public html: string | AttachmentLike
    public subject:string
    public attachments?:Attachment[]
    constructor() { }

    public addAttachment(filename: string, path:string | Url){
        this.attachments.push({filename:filename, path:path})
    }
}