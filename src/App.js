import React, { useState } from 'react';
import {Add_Todo , Delete_todo , Clear_All} from './redux/action/action'
import { useDispatch ,useSelector } from 'react-redux';


export default function App() {
  const [value , setValue] = useState();
  let dispatch = useDispatch();
  let data = useSelector((state)=>state.todoReducer);
  return (
    <>
      <div className='my-8'>
          <div>
        <div className='flex flex-cols justify-center'>
            <input className='border px-2 py-2 shadow-md outline-none font-semibold' type='text' placeholder='Todo Add' 
            autoComplete='off' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className='bg-blue-400 py-2 px-4 text-white font-normal' onClick={()=>{
              if(value===''){alert('fill the Todo list')}
              else{dispatch(Add_Todo(value),setValue(''))}}}>Add items</button>
          </div>
            {
              data.map((item ,index)=>{
                return(
                  <>            
                  <div className='flex justify-center my-1'>
                  <input className='border px-2 py-2 shadow-md outline-none font-semibold' type='text' readOnly value={item}/>
                  <button className='bg-blue-400 py-2 px-2 text-white font-normal' onClick={()=>{dispatch(Delete_todo(index))}}>Delete items</button>
                  </div>
                  </>
                  )
                })
              }
               <div className='flex justify-center'>
                     <button className='bg-blue-400 text-white my-1 shadow-xl px-2 py-1 font-semibold text-lg rounded-lg' onClick={()=>{
                      dispatch(Clear_All(data))}}>Clear All</button>
                  </div>
              </div>
      </div>      
    </>
  )
}
