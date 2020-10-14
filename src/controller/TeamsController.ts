import { NextFunction, Request, Response } from "express";
import fs from "fs";

export class TeamController {
    public create = async (req: Request, res: Response, next: NextFunction) => {
        /*console.log(req.body.data)
        fs.appendFile(__dirname + "/../pages/register/team-register-data.json",JSON.stringify(req.body.data),(err)=>{
            if (err) {
                res.status(400).json({
                    msg: "Bir hata oluştu",
                    state: "Error",
                    err: err.message
                })
            }
            res.status(201).json({
                state: "Success"
            })
        })*/
        /*var file = fs.createWriteStream(__dirname + "/../pages/register/team-register-data.json", { flags: 'a' })
        file.write(JSON.stringify(req.body.data), (err) => {
            if (err) {
                res.status(400).json({
                    msg: "Bir hata oluştu",
                    state: "Error",
                    err: err.message
                })
            }
            res.status(201).json({
                state: "Success"
            })
        })
        file.end("\n")*/
        try {
            let checkState
            var state =  fs.open(__dirname + "/../pages/register/team-register-data.json", "a+",(err,fd)=>{
                if(err){
                    res.status(400).json({
                        state:"Error",
                        msg:"Bir sorun oluştu"
                    })
                }
                fs.write(fd, JSON.stringify(req.body.data , null, 4) + ",",(err)=>{
                    console.log(fd)
                    if(err){
                        res.status(400).json({
                            state:"Error",
                            msg:"Bir sorun oluştu"
                        })
                    }
                    fs.close(fd,(err)=>{
                        if(err){
                            res.status(400).json({
                                state:"Error",
                                msg:"Bir sorun oluştu"
                            })
                        }
                        res.status(201).json({
                            state:"Success"
                        })
                    })
                })
            });
            console.log(state)
            console.log("JSON data is saved.");
        } catch (error) {
            res.status(400).json({
                state:"Error",
                msg:"Bir hata oluştu"
            })
        }
    }
}