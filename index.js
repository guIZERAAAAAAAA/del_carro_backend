import express from "express"
// import carrinho from 'router/carrinho.js'
// import database from 'config/database.js'

const app = express()
app.use (express.json())

app.use("api/v1/carrinho", carro )

database.db
    .sync({force: true})
    .then((_) => {
        app.listen(3000, () => {
            console.log("servidor escurando ")
        })
    })
    .catch((e) => {
        console.log(e)
    })