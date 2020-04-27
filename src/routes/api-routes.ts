import express, { Router, Request, Response } from "express";
import { ParticipantController } from "../controller/participantController";
import { UniversityController } from "../controller/UniversityController";

export class ApiRoutes {
    private participantController:ParticipantController;
    private universityController:UniversityController;
    constructor(private router: express.Router) {
        this.participantController = new ParticipantController();
        this.universityController = new UniversityController();
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
        
        // ? Routes /api/university
        this.router.route('/university')
            .get()
            .post(this.universityController.createUniversity);

        return this.router;
    }
}