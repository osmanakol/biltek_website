import * as dotenv from 'dotenv'

dotenv.config();
export const environment = process.env.NODE_ENV
export const PORT = process.env.PORT

export const staticFile:string = process.env.__static || ""

export const staticFile2:string = process.env.__static2 || ""

export const HOST = process.env.HOST

export const maintainMode = process.env.maintain;