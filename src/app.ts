import bodyParser from "body-parser";
import express,{ Application } from "express";
import { __static } from "../host.json";
import connection from "./models/configuration/connection";
class App{
    public app:Application

    constructor() {
        this.app = express();
        this.config();
        this.routeConfig();
        this.mongoSetup();
    }
    
    private config=()=>{
        this.app.use(express.static(__static));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended:true
        }));
    }

     
    private routeConfig=()=>{
        // TODO:  ileride içerisi tanımlanacak
    }

    private mongoSetup=()=>{
        // TODO : ileride içerisi tanımlanacak
        connection.connection();
    }

    
}

export default new App().app;