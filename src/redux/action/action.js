
export const Add_Todo = (data)=>{
    return{
            type:'ADDTODO',
            data:data
        }
}
export const Delete_todo = (index)=>{
    return{
        type:'DELETETODO',
        index:index
    }
}
export const Clear_All = (data)=>{
    return{
        type:'CLEARALL',
        data:data
    }
}