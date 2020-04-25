import { host,port } from "../host.json";
import app from "./app";

app.listen(port,()=>{
    console.log(`Server Çalışıyor, http://${host}:${port}`)
})