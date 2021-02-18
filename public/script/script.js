 
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    updatePost()

  });
  function updatePost(){

    fetch("http://localhost:2000/api/all").then(res=>{
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

 