import mongoose from "mongoose";
import { mongoURIString } from "../../../host.json";
import {MONGODB_URI } from "../../config";

class Connection {
    public connection = (): void => {
        // ? set mongoose promise like global promise of Node JS
        mongoose.Promise = global.Promise;

        /**@mongoose configuration */
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
            autoIndex:true
        }).then(() => { console.log("Connected to Mongo DB") }).catch(() => { console.log("Could not connect to Mongo DB") })
    }
}
// *export class object
export default new Connection();