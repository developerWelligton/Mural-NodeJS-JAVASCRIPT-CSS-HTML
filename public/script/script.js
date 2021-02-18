 
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    updatePost()

  });
  function updatePost(){

    fetch("http://localhost:1010/api/all").then(res=>{
        return res.json();
    }).then(json=>{
        let postElements = '';
        let posts=JSON.parse(json);//---------->>objeto<<
        posts.forEach((posts) => { // 
            let postElement = ` <div id=${posts.id} class="card mb-4">
                                    <div class="card-header">
                                        <h5 class="card-title">${posts.titulo}</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">${posts.descricao}</div>
                                    </div>
                                </div>`

         postElements += postElement;
        });
        document.getElementById("post").innerHTML = postElements;
    })

}
function newPost(){
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;

    let post = {titulo,descricao};

    const optios= {
        method : 'post',
        headers:new Headers({'content-type':'application/json'}),
        body : JSON.stringify(post)
    }
    
    fetch("http://localhost:1010/api/new",optios)
    .then(res=>{
        console.log(res);
        updatePost();
    })
     


}

//  function newPost(){
//     let titulo = document.getElementById("titulo").value;
//     let descricao =document.getElementById("descricao").value;

//     let posts = {titulo,descricao}

//     const options = {
//         method : "post",
//         header : new Headers({'content-type':'application/json'}),
//         body : JSON.stringify(posts)
//     }

//     fetch("http://localhost:1010/api/new",options).then(res=>{
//         console.log(res);
//         updatePost()
//     })

//  }