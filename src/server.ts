import { host,port } from "../host.json";
import app from "./app";

 /**
  * @param port
  * @param host
  * ? create server for your app
  */
// ? port2 for production
const port2 = process.env.PORT || port;
app.listen(port2,()=>{
    console.log(`Server Çalışıyor, http://${host}:${port2}`)
});