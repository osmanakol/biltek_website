import bodyParser from "body-parser";
import express, { Application, Router } from "express";
import { __static } from "../host.json";
import connection from "./models/configuration/connection";
import { ApiRoutes } from "./routes/api-routes";
import {WebRoutes} from "./routes/web-routes";
import exphbs  from "express-handlebars";
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

    }

    private handlebars = ()=>{
        this.app.engine('handlebars',exphbs());
        this.app.set('view engine','handlebars');
    }

    private config = () => {
        this.app.use(express.static(__static));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }


    private routeConfig = () => {
        this.app.use("/",new WebRoutes(this.webrouter).Routes())
        this.app.use('/api', new ApiRoutes(this.router).Routes())
    }

    private mongoSetup = () => {
        connection.connection();
    }


}

export default new App().app;