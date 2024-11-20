import express from 'express'
import routes from './src/routes/postsRoutes.js'


const app= express()

routes(app)

app.listen(3333,()=>{
    console.log("Servidor escutando...");
})









