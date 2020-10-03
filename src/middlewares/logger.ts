import {createLogger,transports,format} from "winston"
import "winston-daily-rotate-file"
import morgan from "morgan"
import path from "path"
import fs from "fs"
import moment from "moment"
const {combine,timestamp,colorize,printf}=format


const timeformat={
  'format': 'YYYY-MM-DD HH:mm:ss',
  'dateformat':'YYYY-MM-DD'
}
//const currentDate=moment().format(timeformat.dateformat)

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
    new transports.DailyRotateFile({
      format: combine(
        timestamp(timeformat),
        printf(status => `[${status.timestamp}] ${status.level.toLocaleUpperCase()}: ${status.message}`)
      ),
      filename: path.join("logs",'combined.log'),
      maxFiles:'7d'
      //maxsize: 5242880, //5MB

    })/*.on("rotate",function(oldFilename, newFilename) {
      logger.error(oldFilename,"=>",newFilename)
      console.log(new Date(),oldFilename,newFilename)
      try{
        fs.unlinkSync(oldFilename); 
      }catch(err){
        logger.error(err)
        console.log(err)
        console.log("dosya silinmedi")
      }})*/
    ,
    new transports.File({
      format:combine(
        timestamp(timeformat),
        printf(status => `[${status.timestamp}] ${status.level.toLocaleUpperCase()}: ${status.message}`)
      ),
      level:"error",
      filename:'errors.log',
      dirname:"logs"
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
{stream:fs.createWriteStream(path.join("logs", "access.log"),{ flags: 'a+'})})
