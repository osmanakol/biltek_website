import app from "./app";
import { HOST, PORT } from "./config";
import { logger } from "./middlewares/logger";
import { cpus } from "os";
import cluster from "cluster";
import fs from "fs";
/**
 * @param port
 * @param host
 * ? create server for your app
 */
let count = 0;
if (cluster.isMaster) {
  for (let index = 0; index < cpus().length; index++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    cluster.fork();
  });
} else {
  const port2 = PORT || 3003;
  app.set("port", 4447);
  app.listen(app.get("port"), "0.0.0.0", () => {
    /*if (process.env.DYNO && count == 0) {
      console.log("Running on Heroku...");
      fs.openSync("/tmp/app-initialized", "w");
      count++;
    }*/
    logger.info("winston and morgan module is using for logging");
    logger.info("http requests logs are in access.log file");
    logger.info(`Server Çalışıyor, http://${HOST}:${app.get("port")}`);
  });
}
