import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Shopping from './components/Shopping';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <>
    <div className="container">
      <div className="app-wrapper">
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
          <Shopping todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
      </div>
    </div>
      
    </>
  )
}

export default App;