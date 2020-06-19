"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const host_json_1 = require("../host.json");
const connection_1 = __importDefault(require("./models/configuration/connection"));
const api_routes_1 = require("./routes/api-routes");
const web_routes_1 = require("./routes/web-routes");
const express_handlebars_1 = __importDefault(require("express-handlebars"));
class App {
    constructor() {
        this.handlebars = () => {
            this.app.engine('handlebars', express_handlebars_1.default());
            this.app.set('view engine', 'handlebars');
        };
        this.config = () => {
            this.app.use(express_1.default.static(host_json_1.__static));
            this.app.use(body_parser_1.default.json());
            this.app.use(body_parser_1.default.urlencoded({
                extended: true
            }));
        };
        this.routeConfig = () => {
            this.app.use("/", new web_routes_1.WebRoutes(this.webrouter).Routes());
            this.app.use('/api', new api_routes_1.ApiRoutes(this.router).Routes());
        };
        this.mongoSetup = () => {
            connection_1.default.connection();
        };
        this.app = express_1.default();
        this.router = express_1.default.Router();
        this.webrouter = express_1.default.Router();
        this.handlebars();
        this.config();
        this.routeConfig();
        this.mongoSetup();
    }
}
exports.default = new App().app;
