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



