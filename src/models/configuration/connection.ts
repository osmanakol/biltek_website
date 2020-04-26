import mongoose from "mongoose";
import { mongoURIString } from "../../../host.json";

class Connection {
    public connection = (): void => {
        mongoose.Promise = global.Promise;

        mongoose.connect(mongoURIString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        }).then(() => { console.log("Connected to Mongo DB") }).catch(() => { console.log("Could not connect to Mongo DB") })
    }
}

export default new Connection();