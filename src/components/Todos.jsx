import React from 'react'
function Todos(props) {
  
  return (
    <div className='task'>

      <h1  style={{ color: props.todo.complete? "green" : "red" }} onClick={props.toggleComplete}>{props.todo.text}</h1>
      <button className='btn bg-red' onClick={props.onDelete}> X </button>
    </div>
  )
}

export default Todos