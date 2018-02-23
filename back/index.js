const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');

const {addProductToCart, removeProductFromCart} = require('./src/domain/cart');
const healthcheck = require('./src/controllers/healthcheck.route');

const app = express();

let cart = [];

app.use((err, req, res, next) => {
    console.log(err);
    res.statusCode = 500;
    res.end('Something went wrong');
});
app.use(bodyparser.json());

app.get('/', healthcheck);

app.get('/products', (req, res) => {
    fs.readFile('./src/products.json', (err, data) => {
        if (err) console.log(err);
        res.json(JSON.parse(data.toString()));
    });
});

app.post('/addProductToCart', (req, res) => {
    const id = req.body.id;

    cart = addProductToCart(id, cart);

    res.json(cart);
});

app.post('/removeProductFromCart', (req, res) => {
    const id = req.body.id;

    cart = removeProductFromCart(id, cart);

    res.json(cart);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
