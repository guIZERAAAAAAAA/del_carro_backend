import express from "express"
import carrinho from 'router/carrinho.js'
import database from 'config/database.js'

const app = express()
app.use (express.json())

app.use("/api/v1/carrinho", carrinho )

database.db
    .sync({force: true})
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor escutando na porta 3000")
        })
    })
    .catch((e) => {
        console.log("Servidor escuntado na porta 3000")
    })