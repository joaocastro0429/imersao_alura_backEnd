import express from 'express'

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
];

const app= express()



app.listen(3333,()=>{
    console.log("Servidor escutando...");
})

app.get("/api",(req,res)=>{
    res.status(200).send("A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
})

app.get("/posts",(req,res)=>{
    res.status(200).json(posts);
})

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id",(req,res)=>{
    const index = buscarPostPorId(req.params.id)
    res.json(posts[index])
})




