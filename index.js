const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const fruit = {
    product: 'orange',
    price: 40
  }
  res.send(fruit);
});

app.get('/fruits/banana', (req, res)=>{
  res.send({product:'banana', quantity:'100', price: 500})
})

app.listen(3000, ()=> console.log('listening to port 3000'))