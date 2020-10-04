import mongoose from "mongoose";
import { MONGODB_URI } from "../../config";
import { logger } from "../../middlewares/logger";
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
        }).then(() => { logger.info("Connected to Mongo DB") }).catch(() => { logger.error("Could not connect to Mongo DB") })
    }
}
// *export class object
export default new Connection();