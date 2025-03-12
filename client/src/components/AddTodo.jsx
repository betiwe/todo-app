import React, { useState } from 'react';
import axios from 'axios'

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      try {
        const response = await axios.post('http://localhost:5000/api/todos', { text });
        console.log('В AppTodo.jsx',response.data);
        onAdd(response.data);
        setText('');
      } catch (err) {
        console.err('Error adding todo', err)
      }
    }
  };

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a new task'/>
			<button type='submit'>Add</button>
		</form>
	)
};

export default AddTodo;