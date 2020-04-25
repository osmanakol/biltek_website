import bodyParser from "body-parser";
import express,{ Application } from "express";
import { __static } from "../host.json";
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
        //ileride içerisi tanımlanacak
    }

    private mongoSetup=()=>{
        //ileride içerisi tanımlanacak
    }

    
}

export default new App().app;