const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('working')
});

app.get('/cart/:id', (req, res) => {
  res.send('Cart '+req.params.id);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

