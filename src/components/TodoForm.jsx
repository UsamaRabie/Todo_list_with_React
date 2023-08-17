
import React, { useRef, useState } from 'react'
import shortid from 'shortid';

function TodoForm(props) {
  const inputRef = useRef()
  const [text , setText] = useState("")
  const handleSubmit = (e)=>{
  

    e.preventDefault();
    if(text==="")return (alert("Please Enter Valid Data"))
    props.onSubmit( {
      id:shortid.generate(),
      text : text,
      complete : false,
    } )
    setText("")
    inputRef.current.focus()

  
  }
  return (
    <form onSubmit={handleSubmit} className='container'>
      <input 
      ref={inputRef}
      type="text" 
      placeholder='add todo' 
      value={text} 
      onChange={(e)=>{setText(e.target.value)}} 
      />
      <button className='btn bg-green' onClick={handleSubmit}>add task</button>
    </form>
  )
}

export default TodoForm