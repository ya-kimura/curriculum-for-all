const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res, next) => {
    res.send({
        title:"Meu servidor express",
        version: "0.0.0."
    })
})

app.listen(port, err => {
    console.log(`Server is linstening on ${port}`)
})