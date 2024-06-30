
let initialState = []
export const todoReducer = (state=initialState , action)=>{
   switch(action.type){
      case 'ADDTODO': return  [...state , action.data]
      case 'DELETETODO': state.splice(action.index,1)
                         return [...state]
      case 'CLEARALL': return []

      default: return state;
   }
}
