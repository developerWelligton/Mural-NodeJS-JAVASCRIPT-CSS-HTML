const express = require("express");
const app = express();
const path = require('path');
 

const RouterApi = require("./rotas/api");

 app.use("/",express.static(path.join(__dirname,"public")))
 app.use("/api",RouterApi);

app.listen(1010,(req,res)=>{

    console.log("RODANDO..")
})
 




