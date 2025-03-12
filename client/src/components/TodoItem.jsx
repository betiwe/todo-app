import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type='checkbox' checked={todo.completed} onChange={() => onToggle(todo._id)} />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
