import React, { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from "uuid";
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodoInput, setNewTodoInput] = useState("");

  const addTodo = () => {
    if (newTodoInput.trim() === "") {
      alert("Please add new todo info");
    }

    const newTodo = {
      id: uuidv4(),
      name: newTodoInput,
    };

    setTodos([...todos, newTodo]);
    setNewTodoInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header>Todo List App</header>

      <div className="input-container">
        <input 
          type="text"
          value={newTodoInput}
          onChange={(e) => setNewTodoInput(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={addTodo}  className="add-task-button">Add task</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
