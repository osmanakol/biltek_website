import express, { Router, Request, Response ,NextFunction} from "express";
import { ParticipantController } from "../controller/ParticipantController";
import { UniversityController } from "../controller/UniversityController";
import { DepartmentController } from "../controller/DepartmentController";
import {validate} from "../middlewares/validation";
import{ParticipantValidationChain} from "../models/participants/participantModel"
import { EventController } from "../controller/EventController";
import { sendNotificationMail } from "../middlewares/notificationMailer"

export class ApiRoutes {
    private participantController:ParticipantController;
    private universityController:UniversityController;
    private deparmentController:DepartmentController;
    private eventController:EventController;

    constructor(private router: express.Router) {
        this.participantController = new ParticipantController();
        this.universityController = new UniversityController();
        this.deparmentController = new DepartmentController();
        this.eventController = new EventController();
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
            //.get(this.participantController.findAll)
            .post(validate(ParticipantValidationChain),sendNotificationMail(),this.participantController.createParticipant)
             //.put(this.participantController.updateParticipant)
             //.delete(this.participantController.deleteParticipant);

        // ? Routes /api/university
        this.router.route('/university')
            .get(this.universityController.findAll)
            // .post(this.universityController.createUniversity)
            // .put(this.universityController.update)
            // .delete(this.universityController.delete);
        
        // ? Routes /api/university/addMany
        this.router.route('/university/addMany')
            .post(this.universityController.createUniversities)

        // ? Routes /api/department
        this.router.route('/department')
            .get(this.deparmentController.findAll)
            // .post(this.deparmentController.createMany)
            // .put(this.deparmentController.update)
            // .delete(this.deparmentController.delete);
            
        this.router.route('/departments')
            .get(this.deparmentController.getDepartmentsByUniversityId);
        
        this.router.route('/event')
            .get(this.eventController.findAll)
            // .post(this.eventController.create)
            // .put(this.eventController.update)
        
        this.router.route('/event/isActive')
            .get(this.eventController.getByActiveEvent)

        this.router.route('/event/participant/add')
            .get()
            .post(validate(ParticipantValidationChain),this.participantController.addEvent)
        return this.router;
    }
} 