import express, { NextFunction, Request, Response } from "express";
export class CtfRoutes {
  protected route: express.Router;
  constructor() {
    this.route = express.Router();
  }

  public Routes = (): express.Router => {
    this.route.get("/", function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.render("site/homepage", {
        layout: "indexLayout",
        title: "AnaSayfa",
        class: "homepage",
        cssName: "index",
      });
    });

    this.route.get("/cyberbiltek", function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.render("site/cyberbiltek", {
        layout: "indexLayout",
        title: "BTG Nedir?",
        class: "cyberbiltek",
        cssName: "cyberbiltek",
      });
    });

    this.route.get("/history", function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.render("site/history", {
        layout: "indexLayout",
        title: "History",
        class: "history",
        cssName: "history",
      });
    });

    this.route.get("/ctf", function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.render("site/ctf", {
        layout: "indexLayout",
        title: "CTF",
        class: "ctf",
        cssName: "ctf",
      });
    });

    this.route.get("/calender", function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.render("site/calender", {
        layout: "indexLayout",
        title: "Calender",
        class: "calender",
        cssName: "calender",
      });
    });

    this.route.get("/sponsor", function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.render("site/sponsor", {
        layout: "indexLayout",
        title: "Sponsor",
        class: "sponsor",
        cssName: "sponsor",
      });
    });

    this.route.get("/register", function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.render("site/register", {
        layout: "indexLayout",
        title: "Register",
        class: "register",
        cssName: "register",
      });
    });

    return this.route;
  };
}
