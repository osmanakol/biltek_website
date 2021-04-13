import vhost from "vhost";
import express, { Application } from "express";
import connection from "./models/configuration/connection";
import { ApiRoutes } from "./routes/api-routes";
import { WebRoutes } from "./routes/web-routes";
import { CtfRoutes } from "./routes/ctf-routes";
import exphbs from "express-handlebars";
import { staticFile, staticFile2 } from "./config";
import { httpLogger } from "./middlewares/logger";
import path from "path";
import cors from "cors";
class App {
  public app: Application;
  public ctf: Application;
  public router: express.Router;
  public webrouter: express.Router;
  constructor() {
    this.app = express();
    this.ctf = express();
    this.router = express.Router();
    this.webrouter = express.Router();
    this.handlebars();
    this.config();
    this.virtualHost();
    this.routeConfig();
    this.mongoSetup();
  }

  private handlebars = () => {
    const hb = exphbs.create({
      helpers: {},
    });
    this.app.engine("handlebars", exphbs());
    this.app.set("view engine", "handlebars");

    const ctf_views_path = path.resolve("subdomain", "ctf-page", "views");
    //path.join(__dirname) + "/subdomain/ctf-page/views"
    this.ctf.set("views", ctf_views_path);
    const ctf_hbs = exphbs.create({
      layoutsDir: ctf_views_path + "/layouts",
      partialsDir: ctf_views_path + "/partials",
      extname: ".handlebars",
    });
    this.ctf.engine("handlebars", ctf_hbs.engine);
    this.ctf.set("view engine", "handlebars");
  };

  private config = () => {
    /*this.app.use(cors({
      credentials: true,
      origin: '*'
    }))
    this.ctf.use(cors({
      credentials: true,
      origin: '*'
    }))*/
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    this.app.use("/main", express.static(staticFile));
    console.info(path.resolve("subdomain", "ctf-page", "assets", "."));
    this.ctf.use("/static", express.static(staticFile2));
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.ctf.use(express.json());
    this.ctf.use(
      express.urlencoded({
        extended: true,
      })
    );
  };

  private virtualHost = () => {
    const domain = 
       process.env.NODE_ENV === "production" ? "aybubiltek.com" : "mysite.local";

    this.app.use(vhost(`ctf.${domain}`, this.ctf));
  };

  private routeConfig = () => {
    this.app.use(httpLogger);
    // ? http://aybubiltek.com/
    this.app.use("/", new WebRoutes(this.webrouter).Routes());
    // ? http://aybubiltek.com/api
    this.app.use("/api", new ApiRoutes(this.router).Routes());

    this.ctf.use("/", new CtfRoutes().Routes());
  };

  private mongoSetup = () => {
    connection.connection();
  };
}

export default new App().app;
