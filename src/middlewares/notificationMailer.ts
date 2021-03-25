import { Request, Response, NextFunction } from "express";
import { setApiKey, send, MailDataRequired } from "@sendgrid/mail";


export const sendNotificationMail = () => {
    setApiKey(process.env.SENDGRID_API_KEY)
    return async (req: Request, res: Response, next: NextFunction) => {
        const message: MailDataRequired = {
            to: req.body.email,
            from: "Bilim ve Teknoloji Kulübü <info@aybubiltek.com>",
            subject: "Aramıza Hoşgeldiniz",
            text: `${req.query.message}`,
            html: `<p><b>${req.query.message}</b></p>`
        }
        send(message)
            .then(() => {
                console.info("kayıt başarılı")
                res.status(200).json({
                    state: "Success"
                })
            }).catch((error) => {
                console.error(error)
                res.status(400).json({
                    state:"Error",
                    message:error.message
                })
            });


    }
}