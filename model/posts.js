module.exports = {
     posts : [
        {id:1,
         titulo:"titulo 1",
         descricao:"descricao 1"
        }
    ],

     getAll(){
         return this.posts;
     },

     getpost(titulo,descricao){
        this.posts.push({id:GeraId(),titulo,descricao})
     }
}

function GeraId(){
    return Math.floor(Math.random()*999999)
}