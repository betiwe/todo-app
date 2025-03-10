import React, {useState} from "react";

import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

import "./styles/App.css"

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id == id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <div className="app">
      <Header />
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      <Footer />
    </div>
  )
}

export default App;