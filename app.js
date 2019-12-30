require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

const app = express();

//Parse incoming requests data
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
// require('./routes')(app);
app.post('/api/v1/todos', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const todo = {
   id: db.length + 1,
   title: req.body.title,
   description: req.body.description
 }
 db.push(todo);
 return res.status(201).send({
   success: 'true',
   message: 'todo added successfully',
   todo
 })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
module.exports =app;
