import {createLogger,transports,format} from "winston"
import morgan from "morgan"
import path from "path"
import fs from "fs"
const {combine,timestamp,colorize,printf}=format

const timeformat={
  'format': 'YYYY-MM-DD HH:mm' 
}

const logConfiguration = {
  'transports': [
    new transports.Console({
      format: combine(
        timestamp(timeformat),
        colorize({
          colors: { info: 'blue' }
        }),
        printf(levelStatus => `${levelStatus.timestamp} ${levelStatus.level}: ${levelStatus.message}`)
      )
    }),
    new transports.File({
      format: combine(
        timestamp(timeformat),
        printf(status => `${status.timestamp} ${status.level}: ${status.message}`)
      ),
      //level:"info" //sadece hangi level belirtilirse oraya kadar olan levelleri yazıyo
      filename: path.join(__dirname, "combined.log"),
      //maxsize: 5242880, //5MB

    })
  ]
} 
export const logger = createLogger(logConfiguration);
export const httpLogger=morgan(':remote-addr - :remote-user :date[iso] ":method :url HTTP/:http-version" :status :response-time ms',
{stream:fs.createWriteStream(path.join(__dirname, 'access.log'))})

/*export class LoggerStream {
  write(message: string) {
      logger.info(message);
  }
}
export const httpLogger=morgan(':remote-addr - :remote-user [:date ":method :url HTTP/:http-version" :status',{stream:new LoggerStream()})
*/