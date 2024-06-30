
import React, { useCallback, useEffect, useState, useRef } from 'react'

function PasswordGen() {
  const [Password , setPassword] = useState(' ');
  const [length , setLength] = useState(8);
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passGenerated = useCallback(()=>{
      let pass ='';
      let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      if(numberAllowed) str +='123456789';
      if(charAllowed) str +='¬!"£$%^&*()_+@?';
      for(let i=1; i<=length; i++){
        let char = Math.floor(Math.random()*str.length + 1);
         pass += str.charAt(char)
        }
        setPassword(pass);
  },[length , numberAllowed , charAllowed , setPassword]);

  useEffect(()=>{
    passGenerated();
  },[length, numberAllowed, charAllowed, passGenerated])
  console.log('character are ',charAllowed)
  console.log('Number are ',numberAllowed)
  console.log('length is ',length)
  
  return (
    <>
      <div className='flex flex-col justify-center h-screen items-center bg-black text-white'>
        <h1 className='text-4xl font-semibold'>Password Generator</h1>
          <div className='bg-gray-500 px-2 py-2 rounded-lg'>
            <div>
             <input type='text' readOnly placeholder='Password' value={Password} 
             className='border outline-none px-2 py-1 text-xl rounded-l-lg w-[80%] text-black'/>
             <button className='bg-blue-600 text-white px-2 py-1 text-xl rounded-r-lg w-[20%]'>Copy</button>
            </div>
            <div className='mt-4 flex gap-4'>
              <div>
               <input type='range' min={8} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer'/>
               <label className='px-2 text-black text-lg'>Length:{length}</label>
              </div>
              <div className='space-x-2'>
               <input type='checkbox' defaultChecked={numberAllowed} onClick={()=>setnumberAllowed((pre)=>!pre)}/>
               <label>Number</label>
             </div>
             <div className='space-x-2'>
               <input type='checkbox' defaultChecked={charAllowed} onClick={()=>setcharAllowed((pre)=>!pre)}/>
               <label>Character</label>
             </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default PasswordGen
