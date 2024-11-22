import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';

const useUsers=()=>{
    const [filter,setFilter]=useState('');
    const [value]=useDebounce(filter,1000);
    const [userCollection,setCollection]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[])
    const loadUsers=()=>{
        fetch(`https://swapi.dev/api/people?search=${filter}`)
        .then((res)=>res.json()).then((result)=>setCollection(result.results));
        console.log(userCollection)
    }
    return{
        userCollection,
        loadUsers,
        filter,
        setFilter,
        value
    }
}

const CustomHooks = () => {
    const {userCollection,loadUsers,filter,setFilter,value}=useUsers();
    useEffect(()=>{
        loadUsers();
    },[value])
  return (
    <>
    <div>CustomHooks</div>
    <input type='text' value={filter} onChange={(e)=>setFilter(e.target.value)}/>
<ul>
    {userCollection.map((user,index)=>{
        return<li key={index}>
           {user.name}
        </li>
    })}
</ul>
    </> )
}

export default CustomHooks