<<<<<<< HEAD
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
=======
import { Request, Response, NextFunction } from "express";
import { TeamService } from "../services/TeamServices";
import { TeamsModel } from "../models/teams/teamsModel";


export class TeamsController {
    private teamService: TeamService;

    constructor() {
        this.teamService = new TeamService()
    }

    public createTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.teamService.create(new TeamsModel(req.body.teamName, req.body.logo, req.body.foundationYear, req.body.isActive))
            res.status(201).json({
                data: result,
                status: "Success"
            })
        }
        catch (error) {
            res.json({
                err: error,
                status: "Error"
            })
        }
    }

    public createManyParticipant = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.teamService.createMany(new Array<TeamsModel>(...req.body.teams))
            res.status(201).json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }
    }

    public updateParticipant = async (req: Request, res: Response, next: NextFunction) => {

        const result = await this.teamService.update(req.body._id, new TeamsModel(req.body.teamName, req.body.teamMember, req.body.foundationYear, req.body.isActive)).then((result) => {

            res.status(201).json({
                data: result,
                status: "Success"

            })

        }).catch(err => {
            res.json({
                err: err,
                status: "Failed"
            })
        })

    }
    public deleteParticipant = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.teamService.delete(req.body._id)
            res.status(200).json({
                result: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }
    }

    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.teamService.findAll()
            res.json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }
    }

    public findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.teamService.findById(req.body._id)
            res.json({
                data: result,
                state: "Success"
            })
        } catch (error) {
            res.json({
                err: error,
                state: "Error"
            })
        }
    }
}



>>>>>>> teamsModule
