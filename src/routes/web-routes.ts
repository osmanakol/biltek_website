import express, { Request, Response } from "express";

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

        return this.router;
    }
}