import app from "./app";
import { HOST, PORT } from "./config";
import { logger } from "./middlewares/logger";
import fs from "fs";
/**
 * @param port
 * @param host
 * ? create server for your app
 */
const port2 = PORT || 3003;
app.set("port", 4445);
app.listen(app.get("port"), () => {
  if (process.env.DYNO) {
    console.log("Running on Heroku...");
    fs.openSync("/tmp/app-initialized", "w");
  }
  console.log("Node app is running on port:", app.get("port"));
  console.log(`http://localhost:${app.get("port")}`);
  logger.info("winston and morgan module is using for logging");
  logger.info("http requests logs are in access.log file");
  logger.info(`Server Çalışıyor, http://${HOST}:${app.get("port")}`);
});
