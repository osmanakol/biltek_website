import express, { Request, Response } from "express";
import teams from "./../pages/register/team-register.json";
export class WebRoutes {

    constructor(private router: express.Router) {

    }

    public Routes = (): express.Router => {
        this.router.get("/", (req: Request
            , res: Response) => {
            res.render("site/homepage", { layout: "homepageLayout" })
        })
        this.router.get("/comingSoon", (req: Request, res: Response) => {
            res.render("site/comingSoon", { layout: "comingSoonLayout" })
        })
        
        this.router.get("/event/register", (req: Request, res: Response) => {
             res.render("site/EventsForm", { layout: "EventsFormLayout", data:teams })
         })

        // this.router.get("/teams/register", (req: Request, res: Response) => {
        //     res.render("site/EventsForm", { layout: "EventsFormLayout", data: teams })
        // })
        this.router.get("/admin", (req:Request, res:Response) =>{
            res.render("site/admin", {layout:"adminpanelLayout"})
        })

        //Website 2
        this.router.get("/home2", (req: Request, res: Response) => {
            res.render("site/homepage2", { layout: "homepage2Layout" })
        })
        this.router.get("/about", (req: Request, res: Response) => {
            res.render("site/about", { layout: "aboutLayout" })
        })
        this.router.get("/teams", (req: Request, res: Response) => {
            res.render("site/teams", { layout: "teamsLayout" })
        })
        this.router.get("/events", (req: Request, res: Response) => {
            res.render("site/events", { layout: "eventsLayout" })
        })
        this.router.get("/gallery", (req: Request, res: Response) => {
            res.render("site/gallery", { layout: "galleryLayout" })
        })
        this.router.get("/contact", (req: Request, res: Response) => {
            res.render("site/contact", { layout: "contactLayout" })
        })
        return this.router;
    }
}