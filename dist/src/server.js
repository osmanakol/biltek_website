"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const host_json_1 = require("../host.json");
const app_1 = __importDefault(require("./app"));
/**
 * @param port
 * @param host
 * ? create server for your app
 */
app_1.default.listen(host_json_1.port, () => {
    console.log(`Server Çalışıyor, http://${host_json_1.host}:${host_json_1.port}`);
});
