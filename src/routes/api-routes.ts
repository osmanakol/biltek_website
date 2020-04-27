import express, { Router, Request, Response } from "express";
import { ParticipantController } from "../controller/participantController";

export class ApiRoutes {
    private participantController:ParticipantController;
    constructor(private router: express.Router) {
        this.participantController = new ParticipantController();
        this.Routes();
    }

    public Routes = ():express.Router => {
        // ? Routes /api 
        this.router.route('/')
            .get((req:Request,res:Response)=>{
                res.json({
                    status:"API is working",
                    message:"Biltek Website Teams"
                })
            })
        // ? Routes /api/participant
        this.router.route('/participant')
            .get()
            .post(this.participantController.createParticipant)

        return this.router;
    }
}