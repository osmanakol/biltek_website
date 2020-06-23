"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const host_json_1 = require("../../../host.json");
class Connection {
    constructor() {
        this.connection = () => {
            // ? set mongoose promise like global promise of Node JS
            mongoose_1.default.Promise = global.Promise;
            /**@mongoose configuration */
            mongoose_1.default.connect(host_json_1.mongoURIString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true
            }).then(() => { console.log("Connected to Mongo DB"); }).catch(() => { console.log("Could not connect to Mongo DB"); });
        };
    }
}
// *export class object
exports.default = new Connection();
