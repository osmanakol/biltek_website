import express, { Router, Request, Response ,NextFunction} from "express";
import { ParticipantController } from "../controller/ParticipantController";
import { UniversityController } from "../controller/UniversityController";
import { DepartmentController } from "../controller/DepartmentController";
import {validate} from "../middlewares/validation";
import "../middlewares/authorize"
import{ParticipantValidationChain} from "../models/participants/participantModel"
import { EventController } from "../controller/EventController";
import {compare, hash} from "bcrypt"
import passport from "passport"
import { AdminController } from "../controller/AdminController";
import { issueJWT } from "../lib/utils"
 



export class ApiRoutes {
    private participantController:ParticipantController;
    private universityController:UniversityController;
    private deparmentController:DepartmentController;
    private eventController:EventController;
    private adminController:AdminController;

    constructor(private router: express.Router) {
        this.participantController = new ParticipantController();
        this.universityController = new UniversityController();
        this.deparmentController = new DepartmentController();
        this.eventController = new EventController();
        this.adminController = new AdminController();
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
            .post(validate(ParticipantValidationChain),this.participantController.createParticipant)
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
        // auth attempts
        this.router.route("/register")
            .post( this.adminController.createAdmin)
        this.router.route("/login")
            .post( 
                (req:Request, res:Response, next: NextFunction) => {
                    this.adminController.findByName(req.body.name).then(async (user) =>  {
                        try{
                        if (!user) {
                            res.status(401).json({ success: false, msg: "could not find user" });
                        }
                        
                        // Function defined at bottom of app.js
                        console.log("og")
                        const isValid = await compare(req.body.password, user.password)
                        
                        if (isValid) {
            
                            const tokenObject = issueJWT(user);
                            res.cookie('jwt', tokenObject.token);
                            res.redirect("/")
                        } else {
            
                            res.status(401).json({ success: false, msg: "you entered the wrong password" });
            
                        }
                    } catch(err){
                        res.status(401).json({ success: false, msg: "an error occured" });
                    }
            
                    })
                    .catch((err) => {
                        next(err);
                    });
                })
        return this.router;
    }
} 