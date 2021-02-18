const express = require("express");
const app = express();
const bodyParser =require('body-parser')


let posts = [
    {id:1,
     titulo:"titulo 1",
     descricao:"descricao 1"
    }
]

app.get("/all",(req,res)=>{
    res.json(JSON.stringify(posts))
})

app.get("",(req,res)=>{
    res.send("GET")
})

app.post("/new", bodyParser.json(),(req,res)=>{
     let id = GeraId();
     let titulo = req.body.titulo;
     let descricao = req.body.descricao;
        posts.push({id,titulo,descricao});
     res.send("post adicionado")
}) 


app.listen(1010,(req,res)=>{

    console.log("RODANDO..")
})

function GeraId(){
    return Math.floor(Math.random()*999999)
}




