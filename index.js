const express = require("express");
const app = express();


app.get("",(req,res)=>{
    res.send("GET")
})


app.listen(1010,(req,res)=>{

    console.log("RODANDO..")
})




