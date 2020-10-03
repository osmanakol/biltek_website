import bodyParser from "body-parser";
import express, { Application} from "express";
import connection from "./models/configuration/connection";
import { ApiRoutes } from "./routes/api-routes";
import {WebRoutes} from "./routes/web-routes";
import exphbs  from "express-handlebars";
import { staticFile } from "./config";
import {httpLogger, logger } from "./middlewares/logger"; 
import {errorhandler, NotFoundError } from "./middlewares/errorhandler";
  
process.on('uncaughtException', err => {
    logger.error('There was an uncaught error', err)
    //process.exit(1)
})
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
        this.app.use(express.static(staticFile));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }


    private routeConfig = () => {
        this.app.use(httpLogger)
        // ? http://aybubiltek.com/
        this.app.use("/",new WebRoutes(this.webrouter).Routes())
        // ? http://aybubiltek.com/api
        this.app.use('/api', new ApiRoutes(this.router).Routes())
        //catch 404 errors
        this.app.use((err,res,next)=>next(new NotFoundError()))
        //user-facing error handling middleware using
        this.app.use(errorhandler)
        
    }

    private mongoSetup = () => {
        connection.connection();
    }


}

export default new App().app;