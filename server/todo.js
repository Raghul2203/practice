const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Helper function to read todos
function readTodos() {
  const data = fs.readFileSync('./todo.json', 'utf-8');
  return JSON.parse(data);
}

// Helper function to write todos
function writeTodos(data) {
  fs.writeFileSync('./todo.json', JSON.stringify(data, null, 2));
}

// ROUTES

// Get all todos
app.get('/todos', (req, res) => {
  const data = readTodos();
  res.json(data.todos);
});

// Add new todo
app.post('/add', (req, res) => {
  const { item } = req.body;
  const data = readTodos();

  data.todos.push(item);
  writeTodos(data);

  res.json({ message: "Todo added", todos: data.todos });
});

// Delete todo
app.delete('/delete', (req, res) => {
  const { item } = req.body;
  const data = readTodos();

  data.todos = data.todos.filter(t => t !== item);
  writeTodos(data);

  res.json({ message: "Todo deleted", todos: data.todos });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
