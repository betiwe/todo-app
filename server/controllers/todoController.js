const Todo = require('../models/Todo');

// Получение всех задач

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Создание новой задачи

const createTodo = async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Обновление задачи

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ message: 'Task not found' });

    todo.completed = completed;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Удаление задачи

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(400).json({ message: 'Task not found' });

    await todo.deleteOne();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
