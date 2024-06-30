
import React, { useEffect, useState } from 'react';
import { data } from './EmployeeDetail';

export default function CrudApp() {
const [Data , setData] =useState([]);
const [Name , setName] =useState();
const [Dep , setDep] =useState();
const [ID , setID] =useState();
const [update , setupdate] =useState(false);

   useEffect(()=>{
      setData(data);
   },[])
   
   const handleSave = (e)=>{
    if(Name==='' || Dep===''){
      return alert('Fill the requirements')
    }
    else{
    e.preventDefault();
    const dt = [...Data];
    const newobject ={
        id:Data.length+1,
        name:Name,
        dep:Dep
    }
    dt.push(newobject);
    setData(dt);
    handleClear()
  }
  }


  const handleClear =()=>{
    setName('');
    setDep('');
    setupdate(false);
  }

  const handleUpdate =()=>{
    const index = Data.findIndex(item=>item.id === ID);
    const dt = [...Data];
    dt[index] = {id:ID, name:Name, dep:Dep}
    setData(dt);
    console.log(Data)
    handleClear();
  }

  const handleEdit =(id)=>{
    const dt = Data.filter(item=>item.id == id);
    if(id !==undefined){
    setupdate(true);
    setName(dt[0].name);
    setDep(dt[0].dep);
    setID(id)
    }
  }

  const handleDelete = (id)=>{ 
    const dt = Data.filter(item=>item.id!==id)
    setData(dt);}

  return (
    <>
    <h1 className='bg-orange-400 text-white text-2xl text-center py-2 font-semibold'>CRUD APP</h1>
    <div className='flex justify-center mt-10'>
      <label>Enter name:</label>
      <input type='text' placeholder='Enter name' className='border outline-none' required value={Name} onChange={(e)=>setName(e.target.value)}/>
      <label>Enter dep:</label>
      <input type='text' placeholder='Enter depart'className='border outline-none' required value={Dep} onChange={(e)=>setDep(e.target.value)}/>
    
      { !update ?
      <button className='px-2 py-1 bg-blue-400 text-white rounded-lg ' onClick={(e)=>{handleSave(e)}}>Save</button>
      :
      <button className='px-2 py-1 bg-blue-400 text-white rounded-lg ' onClick={()=>{handleUpdate()}}>update</button>
      }
      
      <button className='px-2 py-1 bg-red-400 text-white rounded-lg' onClick={()=>{handleClear()}}>clear</button>
    </div>

      <table className='bg-yellow-100 mx-auto mt-6 px-4'>
        <thead>
          <tr className='border-b-2 px-4'>
            <td className='pr-8'>Id</td>
            <td className=''>Name</td>
            <td>Depart</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody className=''>
          {
            Data.map((item , index)=>{
              return(
                <>
                <tr className='border-b-2 px-10' key={index}>
                <td className='px-4'>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.dep}</td>
                <td className='space-x-4'>
                  <button className='px-2 py-1 bg-blue-400 text-white rounded-lg ' onClick={()=>{handleEdit(item.id)}}>Edit</button>
                  <button className='px-2 py-1 bg-red-400 text-white rounded-lg' onClick={()=>{handleDelete(item.id)}}>Delete</button>
                </td>
                </tr>
                </>
              )
            }
           )
          }
        </tbody>
      </table>
    </>
  )
}





// import React, { useEffect, useState } from 'react';
// import { data } from './EmployeeDetail';

// function Crud() {
//    const [Data , setData] = useState([]);
//    const [ID , setID] = useState(0);
//    const [Name , setName] = useState();
//    const [Dep , setDep] = useState();
//    const [update , setUpdate] = useState(false);

//    useEffect(()=>{
//     setData(data);
//    },[])

//    const handleEdit =(id)=>{
//     const dt = Data.filter(item=>item.id==id);
//     if(dt !==undefined){
//       setUpdate(true);
//       setName(dt[0].name);
//       setDep(dt[0].dep);
//       setID(id);
//     }
//   }
//    const handleDelete =(id)=>{
//      if(id > 0){
//       if(window.confirm('Are you sure to delete this item?')){
//          const dt = Data.filter(item =>item.id!==id)
//          setData(dt);
//       }
//      }
//   }
//    const handleSave =()=>{

//    }
//   const handleUpdate = () => {
//     const index = Data.findIndex(item => item.id === ID);
//         const updatedData = [...Data];
//         updatedData[index] = { id: ID, name: Name, dep: Dep };
//         setData(updatedData);
//         handleClear();
    
// };

//    const handleClear = ()=>{
//     setName('')
//     setDep('')
//     setUpdate(false);
//    }

//   return (
//     <>

//     <div className='flex justify-center my-6'>
//       <label>Enter name:</label>
//       <input type='text' placeholder='Enter your name' className='border px-2 mx-4 outline-none'
//       value={Name} onChange={(e)=>{setName(e.target.value)}}/>
//       <label>Enter dep:</label>
//       <input type='text' placeholder='Enter your department ' className='border px-2 mx-4 outline-none'
//       value={Dep} onChange={(e)=>{setDep(e.target.value)}}/>

//       {
//         !update ?
//         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded'
//         onClick={()=>{handleSave()}}>save</button>
//         :
//         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded'
//         onClick={()=>{handleUpdate()}}>update</button>
//       }
//       <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
//       onClick={()=>{handleClear()}}>clear</button>
//     </div>

//     <div className='flex justify-center'>
//       <div className='w-1/3'>
//         <table className='w-full'>
//           <thead className='border-b-2'>
//             <tr>
//               <td>ID</td>
//               <td>Name</td>
//               <td>Department</td>
//               <td>Actions</td>
//             </tr>
//           </thead>
//           <tbody>
//             {Data.map((item , index) => (
//               <tr key={index} className='border-b-2'>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.dep}</td>
//                 <td className='flex gap-4 ml-4'>
//                   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded'
//                   onClick={()=>{handleEdit(item.id)}}>
//                     Edit
//                   </button>
//                   <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
//                   onClick={()=>{handleDelete(item.id)}}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Crud;
