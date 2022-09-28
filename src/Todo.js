import React from 'react'
import './Todo.css';

const Todo = ({ todo, updateTodo }) => {
  const getClass = () => {
    return todo.done ? "checked" : "";
  }

  return (
    <div className="todo" onClick={ updateTodo }>
      <h1 className={ getClass() }>{ todo.name }</h1>
    </div>
  )
}

export default Todo