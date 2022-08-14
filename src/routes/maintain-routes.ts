import express, { Request, Response } from "express";
import teams from "./../pages/register/team-register.json";
export class MaintainRoutes {

    constructor(private router: express.Router) {}

    public Routes = (): express.Router => {
        this.router.get("/", (req: Request
            , res: Response) => {
            res.render("site/comingSoon", { layout: "comingSoonLayout" })
        })
        
        return this.router;
    }
}