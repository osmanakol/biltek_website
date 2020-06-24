import { host,port } from "../host.json";
import app from "./app";
import {PORT,HOST} from "./config"

 /**
  * @param port
  * @param host
  * ? create server for your app
  */
// ? port2 for production
const port2 = PORT 
app.listen(port2,()=>{
    console.log(`Server Çalışıyor, http://${HOST}:${port2}`)
});