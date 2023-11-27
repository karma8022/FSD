const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in requests
app.use(bodyParser.json());

// Sample data (you can replace this with a database)
let todos = [
  { id: 1, text: 'Learn Node.js', done: false },
  { id: 2, text: 'Build a RESTful API', done: false },
  {id: 3, text: 'complete assignment', done: false },
];

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET /todos/:id - Get a specific todo by ID
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// POST /todos - Create a new todo
app.post('/todos', (req, res) => {
  const { text } = req.body;
  const newTodo = { id: todos.length + 1, text, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Update a todo by ID
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (todo) {
    todo.text = req.body.text || todo.text;
    todo.done = req.body.done || todo.done;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// DELETE /todos/:id - Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.json({ message: 'Todo deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
