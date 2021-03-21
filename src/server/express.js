const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
const products = require('./products.json')

const app = express()

app.use(cors())

app.get('https://step-by-step-guide.herokuapp.com/api/products', (req, res) => {
    res.json(products)
})

app.get('https://step-by-step-guide.herokuapp.com/api/products/:id', (req,res) => {
    res.json(products.filter(product => product.id === parseInt(req.params.id)))
})

app.listen(port,() => console.log("Server started"))