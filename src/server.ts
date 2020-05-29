import { host,port } from "../host.json";
import app from "./app";

 /**
  * @param port
  * @param host
  * ? create server for your app
  */
app.listen(port,()=>{
    console.log(`Server Çalışıyor, http://${host}:${port}`)
});