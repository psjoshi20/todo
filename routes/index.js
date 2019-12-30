const express = require('express');
//cimport db from '../db/db';
//const todosController = require('../todosController').todos;
import todoController from '../todosControllers/todos';

const router = express.Router();// router handler

router.get('/api/v1/todos', TodosController.getAllTodos);
router.get('/api/v1/todos', TodosController.getAllTodos);
router.get('/api/v1/todos', TodosController.getAllTodos);
 router.get('/api/v1/todos/:id', TodoController.getTodo);
 router.post('/api/v1/todos', TodoController.createTodo);
router.put('/api/v1/todos/:id', TodoController.updateTodo);
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

  export default router;
