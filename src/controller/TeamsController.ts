import { Request, Response, NextFunction } from "express";
import { TeamService } from "../services/TeamServices";
import { TeamsModel } from "../models/teams/teamsModel";


export class TeamsController {
    private teamService: TeamService;

    constructor() {
        this.teamService = new TeamService()
    }
    public createTeam = async (req: Request, res: Response, next: NextFunction) => {

        const result = await this.teamService.create(new TeamsModel(req.body.teamName,req.body.teamMember,req.body.foundationYear,req.body.isActive)).then((result) => {
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


   
}