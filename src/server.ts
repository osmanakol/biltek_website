import app from "./app";
import { HOST,PORT } from "./config";
 /**
  * @param port
  * @param host
  * ? create server for your app
  */
const port2 = PORT || 3003;
app.listen(port2,()=>{
    console.log(`Server Çalışıyor, http://${HOST}:${PORT}`)
});