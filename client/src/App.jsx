import React, { useState, useEffect } from 'react';

import axios from 'axios';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

import './styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        console.log('Data from backend:', response.data)
        setTodos(response.data);
      } catch (err) {
        console.error('Error fetching todos:', err);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    try {
      setTodos([...todos, text]);
      console.log('В App.jsx', text);
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = todos.find((todo) => todo._id === id);
      const response = await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: !todo.completed });

      setTodos(todos.map((todo) => (todo._id === id ? { ...todo, completed: response.data.completed } : todo)));
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  return (
    <div className='app'>
      <Header />
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      <Footer />
    </div>
  );
};

export default App;
