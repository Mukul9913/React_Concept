import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type){
     case 'INCREMENT':
         return state+1;
     case 'DECREMENT':
         return state-1;
     default:
         return state;
    }
 }
 const initialState=0;
const ReducerHook = () => {
    const [state,dispatch]=useReducer(reducer,initialState);
    const increment=()=>{
        dispatch({type:"INCREMENT"})
    }
    const decrement=()=>{
        dispatch({type:'DECREMENT'})
    }   
  return (
  <>
    <div>ReducerHook</div>
    <h1>{state}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
  </>
  )
}

export default ReducerHook