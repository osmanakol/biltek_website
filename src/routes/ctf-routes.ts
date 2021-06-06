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
      res.render("site/index", {
        layout: "indexLayout",
        title: "AnaSayfa",
        class:"homepage",
        cssName: "index",
      });
    });

    return this.route;
  };
}
