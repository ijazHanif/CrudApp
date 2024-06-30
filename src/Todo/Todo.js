import React, { useState } from 'react'

function Todo() {
  const [value , setValue] = useState('');
  const [todos , setTodo] = useState([]);
  
  const AddTodo = ()=>{
    if(!value.trim()) return;
     setTodo([...todos , value])
     setValue('');
  }
  const remove = (index)=>{
     let newtodo = [...todos];
     newtodo.splice(index,1)
     setTodo(newtodo)
  }
  return (
    <>
      <div className='flex justify-center my-4'>
        <input type='text' placeholder='Add Todo' className='border px-2 py-1 text-xl outline-none' 
        value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button className='bg-blue-400 text-white text-xl px-2 outline-none' onClick={()=>{AddTodo()}}>Add Item</button>
      </div>

      {
        todos.map((item , index)=>{
          return(
            <div className='flex justify-center my-2'>
               <input type='text' value={item} readOnly className='border text-xl px-2 py-1 outline-none'/>
               <button className='bg-blue-400 px-4 py-1 text-white text-xl' onClick={()=>{remove(index)}}>Remove</button>
            </div>
          )
        })
      }
      
      <div className='flex justify-center'>
        <button className='bg-blue-400 text-white text-xl px-2 py-1' onClick={()=>{setTodo([])}}>Clear All</button>
      </div>

    </>
  )
}

export default Todo
