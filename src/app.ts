import bodyParser from "body-parser";
import express, { Application} from "express";
import connection from "./models/configuration/connection";
import { ApiRoutes } from "./routes/api-routes";
import {WebRoutes} from "./routes/web-routes";
import exphbs  from "express-handlebars";
import { staticFile } from "./config";
import {httpLogger } from "./middlewares/logger"; 
import {initalize} from "./middlewares/authentication-config"
import passport from "passport"
import { AdminController } from "./controller/AdminController"

import "cookie-parser"
import cookieParser from "cookie-parser";




class App {
    public app: Application
    public router: express.Router
    public webrouter:express.Router
    constructor() {
        this.app = express();
        this.router = express.Router()
        this.webrouter = express.Router();
        this.handlebars();
        this.config();
        this.routeConfig();
        this.mongoSetup();
        this.passportConfig();
    }

    private handlebars = ()=>{
        this.app.engine('handlebars',exphbs());
        this.app.set('view engine','handlebars');
    }

    private config = () => {
        this.app.use(express.static(staticFile));
        this.app.use(bodyParser.json());
        this.app.use(passport.initialize())
        this.app.use(cookieParser())
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    private passportConfig = () => {
        const configAdminController = new AdminController()
        initalize(passport,configAdminController.findByName)
    }

    private routeConfig = () => {
        this.app.use(httpLogger)
        // ? http://aybubiltek.com/
        this.app.use("/",new WebRoutes(this.webrouter).Routes())
        // ? http://aybubiltek.com/api
        this.app.use('/api', new ApiRoutes(this.router).Routes())
    }

    private mongoSetup = () => {
        connection.connection();
    }


}

export default new App().app;