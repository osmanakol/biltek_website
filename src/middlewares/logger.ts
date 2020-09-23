import {createLogger,transports,format} from "winston"
import morgan from "morgan"
import path from "path"
import fs from "fs"
import moment from "moment"
const {combine,timestamp,colorize,printf}=format

const timeformat={
  'format': 'YYYY-MM-DD HH:mm:ss' 
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

morgan.token('remote-addr',function (req) { 
  if (req.headers['x-forwarded-for']==undefined) 
    return req.connection.remoteAddress
  else return req.headers['x-forwarded-for'].toString() 
 })
morgan.token('date', ()=> {
  return moment().format(timeformat.format);
 })

 //çıktı formati
export const httpLogger=morgan('[:date] :remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent',
{stream:fs.createWriteStream(path.join(__dirname, 'access.log'),{ flags: 'a' })})


/*export class LoggerStream {
  write(message: string) {
      logger.info(message);
  }
}*/
