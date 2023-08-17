import React, { useState } from "react";
import shortid from "shortid";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "./App.css";
const App = () => {
  let [todos, setTodos] = useState([]);
  let [todoToShow, setTodoToShow] = useState("all");
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleIt = (action) => {
    setTodoToShow(action);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else return todo;
      })
    );
  };

  if (todoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoToShow === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }
 const handleRemoveAllCompleteTodos = ()=>{
  setTodos( todos.filter((todo) => !todo.complete)  )

 }
  return (
    <div>
      <TodoForm onSubmit={addTodo} />

      {todos.map((todo) => (
        <Todos
          toggleComplete={() => toggleComplete(todo.id)}
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
    <div className="task">
      <button className="btn bg-aqua" onClick={() => handleIt("all")}>All</button>
      <button className="btn bg-green" onClick={() => handleIt("active")}>Active</button>
      <button className='btn bg-red'  onClick={() => handleIt("complete")}>Complete</button>
      </div>

<div className="containerRemoveCompleteBtn">
      <button className="btn bg-yellow" onClick={handleRemoveAllCompleteTodos}>
        Remove All Complete todo
      </button>
      </div>
    </div>
  );
};

export default App;
