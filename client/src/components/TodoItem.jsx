import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type='checkbox' checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
