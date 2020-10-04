import app from "./app";
import { HOST,PORT } from "./config";
import { logger } from "./middlewares/logger";
 /**
  * @param port
  * @param host
  * ? create server for your app
  */
const port2 = PORT || 3003;
app.listen(port2,()=>{
  logger.info("winston and morgan module is using for logging")
  logger.info("http requests logs are in access.log file")
  logger.info(`Server Çalışıyor, http://${HOST}:${PORT}`)
});