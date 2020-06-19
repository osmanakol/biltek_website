import { host,port } from "../host.json";
import app from "./app";

 /**
  * @param port
  * @param host
  * ? create server for your app
  */
const port2 = process.env.PORT || 3003;
app.listen(port2,()=>{
    console.log(`Server Çalışıyor, http://${host}:${port2}`)
});