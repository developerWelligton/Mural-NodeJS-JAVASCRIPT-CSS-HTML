const express = require("express")
const router = express.Router();
const posts = require('../model/posts');
const bodyParser =require('body-parser');

router.get("/all",(req,res)=>{
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/new", bodyParser.json(),(req,res)=>{
     
     let titulo = req.body.titulo;
     let descricao = req.body.descricao;
      posts.getpost(titulo,descricao);
         
     res.send("post adicionado")
}) 

module.exports = router;
