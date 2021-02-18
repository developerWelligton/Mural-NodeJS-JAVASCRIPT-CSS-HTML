const express = require("express");
const app = express();
const bodyParser =require('body-parser');
const path = require('path');
const posts = require('./model/posts')

app.get("/all",(req,res)=>{
    res.json(JSON.stringify(posts.getAll()))
})

 

app.post("/new", bodyParser.json(),(req,res)=>{
     
     let titulo = req.body.titulo;
     let descricao = req.body.descricao;
         posts.getpost(titulo,descricao);
         
     res.send("post adicionado")
}) 


app.listen(1010,(req,res)=>{

    console.log("RODANDO..")
})
 




