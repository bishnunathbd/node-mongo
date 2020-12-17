const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

const users = ['Amir', 'Susmita', 'Opu', 'Jabed', 'Sohel', 'Rumel'];

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

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id];
  res.send({id, name});
})

app.listen(3000, ()=> console.log('listening to port 3000'))