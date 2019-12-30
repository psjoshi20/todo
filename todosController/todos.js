import db from '../db/db';
const models = require( '../models');
//const todo = require('../models').Todo;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};

// const  db = require('../db/db');
// const  todoController = new TodosController();
// class TodosController {
//   getAllTodos(req, res) {
//        models.Todo.findAll()
//       .then(todos => res.status(200).send({
//         success: 'true',
//         message: 'todos retrieved successfully',
//         todos,
//       }));
//     }
//   }

// let todoController = new TodosController();
// exports.todoController = TodosController;
