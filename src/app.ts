import bodyParser from "body-parser";
import express,{ Application } from "express";

class App{
    public app:Application

    constructor() {
        this.app = express();
        this.config();
    }

    private config=()=>{
        this.app.use(express.static(""));//ileride düzenlenecek
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended:true
        }));
    }
}