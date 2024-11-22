import React, { useState } from 'react'

const Hooks = () => {
    const [user,setUser]=useState({name:"",age:0});
  return (
    <>
    <h1>Hooks</h1>
    <h2>Name:{user.name}</h2>
    <h2>Age:{user.age}</h2>
    <input type='text' onChange={(e)=>setUser({...user,name:e.target.value})}/>
    <input type='number' onChange={(e)=>setUser({...user,age:e.target.value})}/>
    </>
  )
}

export default Hooks