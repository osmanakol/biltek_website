import bodyParser from "body-parser";
import express, { Application, Router } from "express";
import { __static } from "../host.json";
import connection from "./models/configuration/connection";
import { ApiRoutes } from "./routes/api-routes";
class App {
    public app: Application
    public router: express.Router
    constructor() {
        this.app = express();
        this.router = express.Router()
        this.config();
        this.routeConfig();
        this.mongoSetup();

    }

    private config = () => {
        this.app.use(express.static(__static));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }


    private routeConfig = () => {
        this.app.use('/api', new ApiRoutes(this.router).Routes())
    }

    private mongoSetup = () => {
        connection.connection();
    }


}

export default new App().app;