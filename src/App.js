import React, { useRef, useState } from 'react'
import "./App.css";
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])
  const [count, setCount] = useState(0);

  const nameRef = useRef();

  const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      name: nameRef.current.value,
      done: false
    };
    const newTodos = [...todos, newTodo].sort((a, b) => a.name < b.name); 
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const updateTodo = (todo) => {
    const updatedTodo = { ...todo, done: !todo.done };
    const newTodos = [...todos.filter(item => item.name !== todo.name), updatedTodo].sort((a, b) => a.name < b.name);
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <>
      <form onSubmit={ createTodo }>
        <input type="text" ref={ nameRef } />
        <br/>
        <button type="submit">Create</button>
      </form>
      <div>
        { todos.map(todo => (
          <Todo todo={ todo } updateTodo={ () => updateTodo(todo) } key={ todo.name }/>
        ))}
      </div>
      <button onClick={ () => setCount(count + 1) }>You have clicked { count } times</button>
    </>
  )
}

export default App