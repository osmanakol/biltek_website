import {createLogger,transports,format} from "winston"
import path from "path"

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
      //level:"info" //sadece hangi level belirtilirse kadar olan levelleri yazıyo
      filename: path.join(__dirname, "combined.log"),
      //maxsize: 5242880,

    })
  ]
}

export const logger = createLogger(logConfiguration);